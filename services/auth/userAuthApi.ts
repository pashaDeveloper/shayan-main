import { shigroupApi } from "../2shigroup";

interface AuthBody {
  email?: string;
  phone?: string;
  password?: string;
  name?: string;
}

interface AuthResponse {
  success: boolean; // Add success property
  message?: string; // Add message property (optional, as it’s used conditionally)
  accessToken?: string; // Make optional if not always returned
  user?: {
    id: string;
    name: string;
    email: string;
    phone?: string;
  };
}

export const authApi = shigroupApi.injectEndpoints({
  endpoints: (builder) => ({
    // signin
    phoneLogin: builder.mutation<AuthResponse, AuthBody>({
      query: (body) => ({
        url: "/user/phone-login",
        method: "POST",
        body
      })
    }),
    // signin
    emailLogin: builder.mutation<AuthResponse, AuthBody>({
      query: (body) => ({
        url: "/user/email-login",
        method: "POST",
        body
      })
    }),
    // forgot password
    forgotPassword: builder.mutation<{ message: string }, AuthBody>({
      query: (body) => ({
        url: "/auth/user/forgot-password",
        method: "PATCH",
        body
      })
    }),

   otpVerify: builder.mutation<AuthResponse, { authMethod:string,contactInfo:string, otp: string }>({
      query: (body) => ({
        url: "/auth/verify-otp",
        method: "POST",
        body
      })
    }),

    // persist user
    persistUser: builder.query<AuthResponse, void>({
      query: () => ({
        url: "/auth/user/me",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      }),
      providesTags: ["User", "Review"]
    })
  }),
  overrideExisting: false
});

// export hooks
export const {
  usePhoneLoginMutation,
  useEmailLoginMutation,
  useOtpVerifyMutation,
  useForgotPasswordMutation,
  usePersistUserQuery
} = authApi;
