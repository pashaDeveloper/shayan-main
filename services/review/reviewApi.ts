import { shigroupApi } from "../2shigroup";

export interface ReviewBody {
  serviceId: string;
  comment: string;
  rating: number;
}

export interface ReplyBody {
  serviceId: string;
  parentId: string;
  comment: string;
}
export interface AuthResponse {
  accessToken: string;
  message: string;
  success: boolean;

}
export const reviewApi = shigroupApi.injectEndpoints({
  endpoints: (builder) => ({
    // Add Review
    addReview: builder.mutation<AuthResponse, any>({
      query: (body) => ({
        url: "/review/add",
        method: "POST",
        body
      }),
      invalidatesTags: ["Review"]
    }),

    // Reply Review
    replyReview: builder.mutation<any, ReplyBody>({
      query: (body) => ({
        url: "/review/reply",
        method: "POST",
        body
      }),
      invalidatesTags: ["Review"]
    }),

    // Like Review
    likeReview: builder.mutation<any, { reviewId: string }>({
      query: ({ reviewId }) => ({
        url: `/review/like/${reviewId}`,
        method: "PATCH"
      }),
      invalidatesTags: ["Review"]
    }),

    // Get Reviews
    getReviews: builder.query<any[], { serviceId: string }>({
      query: ({ serviceId }) => ({
        url: `/review/${serviceId}`,
        method: "GET"
      }),
      providesTags: ["Review"]
    }),
  }),
  overrideExisting: false,
});

export const {
  useAddReviewMutation,
  useReplyReviewMutation,
  useLikeReviewMutation,
  useGetReviewsQuery
} = reviewApi;
