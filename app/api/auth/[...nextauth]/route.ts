import NextAuth, { NextAuthOptions, SessionStrategy } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInGoogleUser, verifyOtp } from "@/controllers/userAuth.controller";
console.log("NextAuth handler invoked");
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
    console.log("authorize called!", credentials);
    return { id: "test", name: "Test User" };
  },
    }),
  ],
  pages: {
  signIn: "/fa/auth/user/signin", 
},
  callbacks: {
    async session({ session, token }) {
      console.log("session callback:", { session, token });
      if (session.user && token.uid) session.user.id = token.uid;
      return session;
    },
    async jwt({ token, user }) {
      console.log("jwt callback:", { token, user });
      if (user) token.uid = user.id;
      return token;
    },
    async signIn({ user, account }) {
      console.log("signIn callback:", { user, account });
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
  session: { strategy: "jwt" as SessionStrategy },
};

console.log("authOptions object:", authOptions);

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
