import { Schema, model, models, Document, Types } from "mongoose";
import Counter from "./counter";
import connectDB from "@/libs/db";

connectDB();

export interface IReview extends Document {
  reviewId: number;
  targetModel: string;            // نوع موجودیت: "Service", "Product", "Article", ...
  target: Types.ObjectId;         // آیدی موجودیت
  creator: Types.ObjectId;
  parentId?: Types.ObjectId;
  comment: string;
  rating: number;
  status: "pending" | "approved" | "rejected";
  isDeleted: boolean;
  likes: Types.ObjectId[];
  createdAt?: Date;
  updatedAt?: Date;
}

const reviewSchema = new Schema<IReview>(
  {
    reviewId: { type: Number, unique: true },
    targetModel: { type: String, required: true, enum: ["Service", "Product", "Article"] },
    target: {
      type: Schema.Types.ObjectId,
      required: true,
      refPath: "targetModel",
    },
    creator: { type: Schema.Types.ObjectId, ref: "User", required: true },
    parentId: { type: Schema.Types.ObjectId, ref: "Review", default: null },
    comment: { type: String, required: true, trim: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
    isDeleted: { type: Boolean, default: false },
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

// auto increment reviewId
reviewSchema.pre<IReview>("save", async function (next) {
  if (!this.isNew || this.reviewId) return next();
  try {
    const counter = await Counter.findOneAndUpdate(
      { name: "reviewId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    this.reviewId = counter.seq;
    next();
  } catch (error) {
    next(error as Error);
  }
});

const Review = models.Review || model<IReview>("Review", reviewSchema);
export default Review;
