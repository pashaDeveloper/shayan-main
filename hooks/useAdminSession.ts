
import { useSession } from "next-auth/react";

export const useAdminSession = () => {
  const { data: session, status } = useSession();

  // Transform session data for admin model
  const adminSession = session && session.admin ? {
    admin: {
      id: session.admin.id,
      name: session.admin.name,
      email: session.admin.email,
      // Add other admin-specific fields
    }
  } : null;

  return {
    data: adminSession,
    status,
  };
};