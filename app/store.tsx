
"use client"

import authSlice from "@/features/auth/authSlice";

import userSlice from "@/features/user/userSlice";
import { shigroupApi } from "@/services/2shigroup";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [shigroupApi.reducerPath]: shigroupApi.reducer,
    user: userSlice,
    auth: authSlice,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shigroupApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;