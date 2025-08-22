

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shigroupApi = createApi({
  reducerPath: "2shigroup",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api`,
  }),
  tagTypes: ["User","Favorite", "Review"],
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});