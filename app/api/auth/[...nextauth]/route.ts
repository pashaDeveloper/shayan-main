import NextAuth, { NextAuthOptions, SessionStrategy } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInGoogleUser, verifyOtp } from "@/controllers/userAuth.controller";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "OTP",
      credentials: {
        authMethod: { label: "Auth Method", type: "text" },
        contactInfo: { label: "Email or Phone", type: "text" },
        otp: { label: "OTP", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const result = await verifyOtp({
          body: {
            authMethod: credentials.authMethod,
            contactInfo: credentials.contactInfo,
            otp: credentials.otp,
          },
        } as any);
        if (result.success && result.user) return result.user;
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/user/signin",
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user && token.uid) session.user.id = token.uid;
      return session;
    },
    async jwt({ token, user }) {
      if (user) token.uid = user.id;
      return token;
    },
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          const result = await signInGoogleUser({
            id: user.id,
            name: user.name!,
            email: user.email!,
            avatar: user.image!,
            provider: "google",
            providerId: user.id,
          });
          return result.success;
        } catch (err) {
          console.error("OAuth signup error:", err);
          return false;
        }
      }
      return true;
    },
  },
  // Use type assertion to satisfy TS
  session: { strategy: "jwt" as SessionStrategy },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
