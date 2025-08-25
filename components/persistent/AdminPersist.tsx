"use client";

import { usePersistAdminQuery } from "@/services/auth/adminAuthApi";
import React, { useMemo, useEffect, ReactNode } from "react";
import Screen from "../loading/Screen";
import { addAdmin } from "@/features/auth/authAdminSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { Admin } from "@/features/auth/authAdminSlice";

interface AdminPersistProps {
  children: ReactNode;
}

const AdminPersist: React.FC<AdminPersistProps> = ({ children }) => {
  const { data, isLoading, error } = usePersistAdminQuery();
  const admin: Admin | null = useMemo(() => data?.admin || null, [data]);
  const dispatch = useDispatch<AppDispatch>();
 useEffect(() => {
  if (admin?._id) {
    console.log("admin ready", admin);
    dispatch(addAdmin(admin));
  }

  if (error && "data" in error) {
    console.log((error as any)?.data?.message);
  }
}, [error, admin, dispatch]);


  if (isLoading) {
    return <Screen />;
  }

  return <>{children}</>;
};

export default AdminPersist;
