import { shigroupApi } from "../2shigroup";

export interface ReviewBody {
  targetId: string;
  targetModel: any;
  review: string;
  rating: number;
}

export interface ReplyBody {
  targetId: string;
  targetModel: string;
  parentId: string;
  review: string;
}

interface Review {
  _id: string;
  reviewId: number;
  targetModel: string;
  target: string;
  creator: {
    _id: string;
    name: string;
    avatar: {
      url: string;
      public_id: string;
      originalName: string;
    };
  };
  parentId?: string | null;
  comment: string;
  rating: number;
  status: "pending" | "approved" | "rejected";
  isDeleted: boolean;
  likes: string[];
  createdAt: string;
  updatedAt: string;
  replies?: Review[]; // برای پاسخ‌ها
}


export const reviewApi = shigroupApi.injectEndpoints({
  endpoints: (builder) => ({
    addReview: builder.mutation<{ success: boolean; message: string }, ReviewBody>({
      query: (body) => ({
        url: "/review/add",
        method: "POST",
        body
      }),
      invalidatesTags: ["Review"]
    }),

    replyReview: builder.mutation<{ success: boolean; message: string }, ReplyBody>({
      query: (body) => ({
        url: "/review/reply",
        method: "POST",
        body
      }),
      invalidatesTags: ["Review"]
    }),

    likeReview: builder.mutation<{ success: boolean; message: string }, { reviewId: string }>({
      query: ({ reviewId }) => ({
        url: `/review/like/${reviewId}`,
        method: "PATCH"
      }),
      invalidatesTags: ["Review"]
    }),

    getReviews: builder.query<{ success: boolean; message: string; reviews: Review[] }, { targetId: string; targetModel: string }>({
      query: ({ targetId, targetModel }) => ({
        url: `/review/get-all/${targetId}?targetModel=${targetModel}`,
        method: "GET"
      }),
      providesTags: ["Review"]
    })
  }),
  overrideExisting: false
});

export const {
  useAddReviewMutation,
  useReplyReviewMutation,
  useLikeReviewMutation,
  useGetReviewsQuery
} = reviewApi;
