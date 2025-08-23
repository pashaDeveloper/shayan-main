import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { signInGoogleUser } from "@/controllers/userAuth.controller";
const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  pages: {
    signIn: "/auth/user/signin"
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.uid as string;
      }
      return session;
    },

    async jwt({ user, token }) {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
    async signIn({ user }) {
      try {
        const result = await signInGoogleUser({
          name: user.name!,
          email: user.email!,
          avatar: user.image!,
          provider: "google",
          providerId: user.id
        });

        console.log("Google signup result:", result);
        return result.success; 
      } catch (err) {
        console.error("OAuth signup error:", err);
        return false;
      }
    }
  }
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
