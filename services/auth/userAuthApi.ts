import { shigroupApi } from "../2shigroup";

interface AuthBody {
  email?: string;
  phone?: string;
  password?: string;
  name?: string;
}

interface AuthResponse {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
    phone?: string;
  };
}

export const authApi = shigroupApi.injectEndpoints({
  endpoints: (builder) => ({


    // signin
    signin: builder.mutation<AuthResponse, AuthBody>({
      query: (body) => ({
        url: "/auth/user/signin",
        method: "POST",
        body,
      }),
    }),

    // forgot password
    forgotPassword: builder.mutation<{ message: string }, AuthBody>({
      query: (body) => ({
        url: "/auth/user/forgot-password",
        method: "PATCH",
        body,
      }),
    }),

    // persist user
    persistUser: builder.query<AuthResponse, void>({
      query: () => ({
        url: "/auth/user/me",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
      providesTags: ["User", "Review"],
    }),
  }),
  overrideExisting: false,
});

// export hooks
export const {
  useSigninMutation,
  useForgotPasswordMutation,
  usePersistUserQuery,
} = authApi;
