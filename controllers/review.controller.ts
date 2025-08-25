import Review, { IReview } from "@/models/review.model";
import User from "@/models/user.model";

interface ReviewBody {
  userId: string;
  rating: number;
  review: string;
  serviceId?: string;   
  targetModel?: "Service" | "Product"; 
  parentId?: string;    
}

export async function addReview(body: ReviewBody) {
  try {
    const user = await User.findById(body.userId);
    if (!user) {
      return {
        success: false,
        message: "کاربر یافت نشد",
      };
    }

    let target: string;
    let targetModel: "Service" | "Product" | undefined;
    if (!body.serviceId) {
      return {
        success: false,
        message: "هدف نظر مشخص نشده است",
      };
    }

      target = body.serviceId;

    const newReview = new Review({
      creator: user._id,
      target,
      targetModel,
      parentId: body.parentId || null,
      comment: body.review,
      rating: body.rating,
    });

    await newReview.save();

    return {
      success: true,
      message: "نظر با موفقیت ثبت شد",
      review: newReview,
    };
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      message: error.message || "خطا در ثبت نظر",
    };
  }
}
