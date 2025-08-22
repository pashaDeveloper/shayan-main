import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface User {
  name: string;
  email: string;
}

export interface AuthState {
  user: User | null;
  token?: string;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { addUser, logout } = authSlice.actions;
export default authSlice.reducer;
