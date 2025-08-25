import { shigroupApi } from "../2shigroup";

// Body for authentication endpoints
export interface AuthBody {
  email?: string;
  phone?: string;
  password?: string;
  name?: string;
}

// Response for auth endpoints
export interface AuthResponse {
  accessToken: string;
  message: string;
  success: boolean;
  admin: {
    _id: string;
    name: string;
    role: string;
    phone:string;
    email:string;
    adminLevel:string;
    avatar: {
      url: string;
      public_id: string | null;
    };
  };
}

export const authApi = shigroupApi.injectEndpoints({
  endpoints: (builder) => ({
    // Signin
    signin: builder.mutation<AuthResponse, any>({
      query: (body) => ({
        url: "/admin/signin",
        method: "POST",
        body
      }),
      invalidatesTags: ["Admin"]
    }),

    // Signup
    signup: builder.mutation<AuthResponse, any>({
      query: (body) => ({
        url: "/admin/signup",
        method: "POST",
        body
      }),
      invalidatesTags: ["Admin"]
    }),

    // Forgot Password
    forgotPassword: builder.mutation<{ message: string }, AuthBody>({
      query: (body) => ({
        url: "/admin/forgot-password",
        method: "PATCH",
        body
      })
    }),

    // Persist Admin
    persistAdmin: builder.query<AuthResponse, void>({
      query: () => ({
        url: "/admin/me",
        method: "GET"
      }),
      providesTags: ["Admin", "Review"]
    })
  }),
  overrideExisting: false
});

// Export hooks
export const {
  useSigninMutation,
  useSignupMutation,
  useForgotPasswordMutation,
  usePersistAdminQuery
} = authApi;
