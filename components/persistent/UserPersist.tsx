"use client"
import { usePersistUserQuery } from "@/services/auth/userAuthApi";
import React, { useMemo, useEffect, ReactNode } from "react";
import Screen from "../loading/Screen";
import { addUser } from "@/features/auth/authSlice";
import { useDispatch } from "react-redux";

interface UserPersistProps {
  children: ReactNode;
}

const UserPersist: React.FC<UserPersistProps> = ({ children }) => {
  const { data, isLoading, error } = usePersistUserQuery(); // 
  const user = useMemo(() => data?.user || null, [data]);
  const dispatch = useDispatch();
console.log(user)
  useEffect(() => {
    if (user) {
      dispatch(addUser(user));
    }
    if (error && "data" in error) {
      console.log((error as any)?.data?.message);
    }
  }, [error, user, dispatch]);

  if (isLoading) {
    return <Screen />;
  }

  return <>{children}</>;
};

export default UserPersist;
