
"use client";

import { createContext, useContext, ReactNode } from "react";
import { SessionProvider, signOut } from "next-auth/react";
import { useAdminSession } from "@/hooks/useAdminSession";

interface AdminAuthContextType {
  admin: any | null; // Replace 'any' with your Admin model type
  isAdminLoggedIn: boolean;
  adminLogout: () => Promise<void>;
  status: "loading" | "authenticated" | "unauthenticated";
}

const AdminAuthContext = createContext<AdminAuthContextType>({
  admin: null,
  isAdminLoggedIn: false,
  adminLogout: async () => Promise.resolve(),
  status: "loading",
});

export const AdminAuthProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <InnerAdminAuthProvider>{children}</InnerAdminAuthProvider>
    </SessionProvider>
  );
};

const InnerAdminAuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: adminSession, status } = useAdminSession(); // Custom admin session hook

  const adminLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/admin/login" });
  };

  const value: AdminAuthContextType = {
    admin: adminSession?.admin || null,
    isAdminLoggedIn: status === "authenticated",
    status,
    adminLogout,
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);
