// models/user.model.ts
import { Schema, model, models, Document, Types } from "mongoose";
import { genSaltSync, hashSync, compare } from "bcryptjs";
import { BaseSchema, IBaseSchema } from "./baseSchema.model";
import connectDB from "@/libs/db";
connectDB();

export interface IUser extends Document, IBaseSchema {
  name: string;
  email: string;
  avatar: {
    url: string;
    public_id: string;
    originalName: string;
  };
  password?: string;
  provider?: string;
  providerId?: string;
  phone?: string;
  status: "active" | "inactive";
  address?: string;
  favorite?: Types.ObjectId;
  reviews: Types.ObjectId[];

  encryptPassword(password: string): string;
  comparePassword(current: string, stored: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true, maxLength: 100 },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  phone: { type: String, unique: true, sparse: true },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
  address: { type: String, trim: true, maxLength: 200 },
  avatar: {
    url: { type: String, default: "https://placehold.co/300x300.png" },
    public_id: { type: String, default: "N/A" },
    originalName: { type: String, default: "N/A" },
  },
  provider: { type: String },
  providerId: { type: String },
  favorite: { type: Schema.Types.ObjectId, ref: "Favorite" },
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
});

// اضافه کردن BaseSchema
userSchema.add(BaseSchema);

// پیش از save کردن، پسورد را هش کن
userSchema.pre<IUser>("save", function (next) {
  if (!this.isModified("password") || !this.password) return next();
  const salt = genSaltSync(10);
  this.password = hashSync(this.password, salt);
  next();
});

// متدهای هش و مقایسه پسورد
userSchema.methods.encryptPassword = function (password: string) {
  return hashSync(password, genSaltSync(10));
};
userSchema.methods.comparePassword = async function (current: string, stored: string) {
  return compare(current, stored);
};

const User = models.User || model<IUser>("User", userSchema);
export default User;
