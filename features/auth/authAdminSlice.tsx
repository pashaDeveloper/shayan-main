// @/features/auth/authAdminSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Admin {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  adminLevel: string;
  avatar: {
    url: string;
    public_id: string | null;
  };
}

export interface AuthState {
  admin: Admin | null;
  token?: string;
}

const initialState: AuthState = {
  admin: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAdmin: (state, action: PayloadAction<Admin>) => {
      console.log("addAdmin action dispatched with payload:", action.payload); // لاگ کردن payload
      console.log("Previous state:", state); // لاگ کردن state قبلی
      state.admin = action.payload;
      console.log("New state:", state); // لاگ کردن state جدید
    },
    logout: (state) => {
      console.log("logout action dispatched");
      state.admin = null;
    },
  },
});

export const { addAdmin, logout } = authSlice.actions;
export default authSlice.reducer;