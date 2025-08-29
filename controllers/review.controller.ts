import Review, { IReview } from "@/models/review.model";
import User from "@/models/user.model";
import { Types } from "mongoose";

interface ReviewBody {
  userId: string;
  rating: number;
  review: string;
  id: string;
  targetId: string;
  targetModel: "Review" | "Product";
  parentId?: string;
}

export async function addReview(body: ReviewBody) {
  try {
    const user = await User.findOne({
      $or: [{ googleId: body.userId }]
    });
    if (!user) {
      return {
        success: false,
        message: "کاربر یافت نشد"
      };
    }

    let target: string;
    let targetModel: "Review" | undefined;
    if (!body.targetId) {
      return {
        success: false,
        message: "هدف نظر مشخص نشده است"
      };
    }

    const newReview = new Review({
      creator: user._id,
      target: new Types.ObjectId(body.targetId),
      targetModel: body.targetModel,
      parentId: body.parentId || null,
      comment: body.review,
      rating: body.rating
    });

    await newReview.save();

    return {
      success: true,
      message: "نظر با موفقیت ثبت شد",
      review: newReview
    };
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      message: error.message || "خطا در ثبت نظر"
    };
  }
}

interface ApiServiceResponse {
  success: boolean;
  message?: string;
  reviews?: any; 
}

export async function getReviews({
  targetId,
  targetModel,
}: {
  targetId: string;
  targetModel: string;
}): Promise<ApiServiceResponse> {
  try {
    const reviews = await Review.find({
      target: targetId,       
      targetModel: targetModel 
    })
      .populate("creator", "name avatar") 
      .populate("parentId")               
      .sort({ createdAt: -1 });
    return {
      success: true,
      message: `با موفقیت ${reviews.length} نظر دریافت شد`,
      reviews,
    };
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      message: error.message || "خطا در دریافت نظرات",
      reviews: [],
    };
  }
}