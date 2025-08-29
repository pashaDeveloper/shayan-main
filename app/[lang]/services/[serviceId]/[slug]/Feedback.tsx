"use client";
import React, { useState, useEffect, useMemo } from "react";
import {
  Star,
  Send,
  User,
  ThumbsUp,
  Reply,
  Shield,
  ArrowLeft,
  ArrowUp
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import {
  useAddReviewMutation,
  useReplyReviewMutation,
  useLikeReviewMutation,
  useGetReviewsQuery
} from "@/services/review/reviewApi";
import Image from "next/image";

type params = {
  targetId: any;
  targetModel: string;
  lang: string;
};
type FormValues = {
  rating: number;
  review: string;
  targetId: any;
  userId: String;
  targetModel: String;
};
export default function Feedback({ targetId, targetModel, lang }: params) {
  const { user } = useAuth();
  const { register, handleSubmit, control, reset } = useForm<FormValues>();
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");
  const pathname = usePathname();
  const [addReview, { isLoading, data, error }] = useAddReviewMutation();
  const { data: reviewsData, isLoading: reviewsLoading } = useGetReviewsQuery({
    targetId: targetId,
    targetModel: targetModel
  });
  const comments = useMemo(() => reviewsData?.reviews || [], [reviewsData]);
  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    addReview(formData).unwrap();
  };
  useEffect(() => {
    const toastAddId = "add-review";
    if (isLoading) {
      toast.loading("در حال  ثبت نظر...", { id: toastAddId });
    }

    if (data && data.success) {
      toast.success(data.message, { id: toastAddId });
      reset();
    }
    if (data && !data.success) {
      toast.error(data.message, { id: toastAddId });
    }

    if (error) {
      const err = error as any;
      toast.error(err?.data?.message || err?.data?.error || "خطا در ثبت نظر", {
        id: toastAddId
      });
    }
  }, [isLoading, data, error]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        نظرات و امتیازها ({comments?.length})
      </h2>

      {/* فرم ثبت کامنت */}
      {user ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-8 p-6 bg-gray-50 rounded-lg"
        >
          <h3 className="text-lg font-semibold mb-4">نظر خود را بنویسید</h3>
          <input
            value={user.id}
            className="hidden"
            {...register("userId", { required: true })}
          />
          <input
            value={targetId}
            className="hidden"
            {...register("targetId", { required: true })}
          />
          <input
            value={targetModel}
            className="hidden"
            {...register("targetModel", { required: true })}
          />
          <label className="block text-sm font-medium text-gray-700 mb-2">
            امتیاز شما:
          </label>
          <Controller
            name="rating"
            control={control}
            render={({ field }) => (
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => field.onChange(star)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        star <= field.value
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
            )}
          />
          <textarea
            {...register("review", { required: true })}
            placeholder="نظر خود را بنویسید..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
            rows={4}
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
          >
            <Send className="w-4 h-4 ml-2" />
            ثبت نظر
          </button>
        </form>
      ) : (
        <div className="mb-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
          <span className="text-yellow-800 flex items-center">
            برای ثبت نظر ابتدا وارد
            <Button
              className="text-yellow-800 relative font-bold px-1 flex flex-col items-center"
              onClick={() => signIn("google", { callbackUrl: pathname })}
            >
              حساب کاربری
              <ArrowUp className="h-4 w-4 absolute top-8 mt-1 text-yellow-800 animate-bounce" />
            </Button>
            خود شوید.
          </span>
        </div>
      )}

      {/* نمایش کامنت‌ها */}
      <div className="space-y-6">
        {comments?.map((comment) => (
          <div
            key={comment._id}
            className="border-b border-gray-200 pb-6 last:border-b-0"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center">
                <div className="w-10 h-10 shadow-md rounded-full flex items-center justify-center ml-3">
                  <Image
                    width={150}
                    height={150}
                    src={comment?.creator?.avatar.url || "/default-avatar.png"}
                    alt={comment?.creator?.name || "User"}
                    className="w-9 h-9 rounded-full shadow-lg"
                  />{" "}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {comment.creator.name}
                  </h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < comment.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="mr-2 text-sm text-gray-500">
                      {new Date(comment?.createdAt).toLocaleDateString("fa-IR")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-3 mr-13">{comment.comment}</p>

            <div className="flex items-center gap-4 mr-13">
              <button
                className={`flex items-center gap-1 text-sm ${
                  comment.likes.length > 0 ? "text-blue-600" : "text-gray-500"
                } hover:text-blue-600 transition-colors`}
              >
                <ThumbsUp className="w-4 h-4" /> {comment.likes}
              </button>
              <button
                onClick={() =>
                  setReplyTo(replyTo === comment._id ? null : comment._id)
                }
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Reply className="w-4 h-4" /> پاسخ
              </button>
            </div>

            {/* فرم پاسخ */}
            {replyTo === comment._id && user && (
              <div className="mt-4 mr-13">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="پاسخ خود را بنویسید..."
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2"
                  rows={3}
                />
                <div className="flex gap-2">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    ثبت پاسخ
                  </button>
                  <button
                    onClick={() => setReplyTo(null)}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors text-sm"
                  >
                    انصراف
                  </button>
                </div>
              </div>
            )}

            {/* نمایش پاسخ‌ها */}
            {/* {comment?.replies?.length > 0 && (
              <div className="mt-4 mr-13 space-y-4">
                {comment.replies.map((reply:any) => (
                  <div key={reply.id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center ml-2">
                        {reply.isAdmin ? (
                          <Shield className="w-4 h-4 text-blue-600" />
                        ) : (
                          <User className="w-4 h-4 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-800 flex items-center">
                          {reply.author}
                          {reply.isAdmin && (
                            <span className="mr-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                              مدیریت
                            </span>
                          )}
                        </h5>
                        <span className="text-xs text-gray-500">
                          {new Date(reply.date).toLocaleDateString("fa-IR")}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm mr-10">
                      {reply.comment}
                    </p>
                  </div>
                ))}
              </div>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
}
