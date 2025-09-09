// app/api/auth/[...nextauth]/route.ts
import NextAuth, { type NextAuthOptions, type Session, type User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInGoogleUser, verifyOtp } from "@/controllers/userAuth.controller";

export const authOptions: NextAuthOptions = {
  providers: [
    // ورود با گوگل
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    // ورود با OTP ایمیل/موبایل
    CredentialsProvider({
      name: "OTP",
      credentials: {
        authMethod: { label: "Auth Method", type: "text" }, // "email" | "phone"
        contactInfo: { label: "Email or Phone", type: "text" },
        otp: { label: "OTP", type: "text" },
      },
      async authorize(credentials, req) {
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
    async session({ session, token }: { session: Session; token: { uid?: string } }) {
      if (session.user && token.uid) session.user.id = token.uid;
      return session;
    },

    async jwt({ token, user }: { token: { uid?: string }; user?: User }) {
      if (user) token.uid = user.id;
      return token;
    },

    async signIn({ user, account }: { user: User; account?: any }) {
      // فقط برای گوگل
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
      // CredentialsProvider خودش authorize کافی است
      return true;
    },
  },

  session: { strategy: "jwt" },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
