// contexts/AuthContext.tsx
"use client";

import { createContext, useContext, ReactNode } from "react";
import { useSession, SessionProvider, signOut } from "next-auth/react";

interface AuthContextType {
  user: any | null;
  isLoggedIn: boolean;
  logout: () => Promise<void>;
  status: "loading" | "authenticated" | "unauthenticated";
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoggedIn: false,
  logout: async () => Promise.resolve(),
  status: "loading",
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <InnerAuthProvider>{children}</InnerAuthProvider>
    </SessionProvider>
  );
};

const InnerAuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: session, status } = useSession();

  const logout = async () => {
    await signOut({ redirect: true, callbackUrl: "/" });
  };

  const value: AuthContextType = {
    user: session?.user || null,
    isLoggedIn: status === "authenticated",
    status,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
