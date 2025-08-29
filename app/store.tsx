// store.ts
"use client";

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { shigroupApi } from "@/services/2shigroup"; 
import { servicesApi } from "@/services/service/servicesApi"; 
import authSlice from "@/features/auth/authUserSlice";
import userSlice from "@/features/user/userSlice";
import adminSlice from "@/features/auth/authAdminSlice";

export const store = configureStore({
  reducer: {
    [shigroupApi.reducerPath]: shigroupApi.reducer, 
    [servicesApi.reducerPath]: servicesApi.reducer, 
    user: userSlice,
    auth: authSlice,
    admin: adminSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(shigroupApi.middleware) 
      .concat(servicesApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;