import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    admin?: {
      id: string;
      name?: string | null;
      email?: string | null;
      // Add other admin-specific fields here
    } & DefaultSession["admin"];
  }

  interface Admin extends DefaultUser {
    id: string;
    name?: string | null;
    email?: string | null;
    // Add other admin-specific fields here
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    adminId?: string;
    // Add other admin-specific JWT fields here
  }
}