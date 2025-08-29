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

      state.admin = action.payload;
    },
    logout: (state) => {
      state.admin = null;
    },
  },
});

export const { addAdmin, logout } = authSlice.actions;
export default authSlice.reducer;