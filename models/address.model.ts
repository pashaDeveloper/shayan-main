import { Schema, model, models, Document, Types } from "mongoose";
import Counter from "./counter"; // مدل شمارنده رو ایمپورت کن
import connectDB from "@/libs/db";
connectDB();

// اینترفیس برای Address
export interface IAddress extends Document {
  addressId: number;
  country: string;
  state?: string;
  city?: string;
  street?: string;
  plateNumber?: string;
  phone: string;
  email?: string;
  floor?: string;
  unit?: string;
  postalCode?: string;
  website?: string;
  location?: {
    lat: number;
    lng: number;
  };
  creator?: Types.ObjectId;
  admin?: Types.ObjectId;
  user?: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

// اسکیمای مونگوس
const addressSchema = new Schema<IAddress>(
  {
    addressId: {
      type: Number,
      unique: true,
    },
    country: {
      type: String,
      default: "ایران",
      trim: true,
    },
    state: { type: String, trim: true },
    city: { type: String, trim: true },
    street: { type: String, trim: true },
    plateNumber: { type: String, trim: true },
    phone: {
      type: String,
      unique: true,
      required: [true, "لطفا شماره تماس خود را وارد کنید"],
    },
    email: {
      type: String,
      unique: true,
      match: [
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        "ایمیل وارد شده معتبر نیست",
      ],
    },
    floor: { type: String, default: "همکف", trim: true },
    unit: { type: String, trim: true },
    postalCode: { type: String },
    website: {
      type: String,
      trim: true,
      match: [
        /^(https?:\/\/)?([\w\-]+\.)+[\w\-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/,
        "آدرس وب‌سایت معتبر نیست",
      ],
    },
    location: {
      lat: { type: Number },
      lng: { type: Number },
    },
    creator: { type: Schema.Types.ObjectId, ref: "Admin" },
    admin: { type: Schema.Types.ObjectId, ref: "Admin" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

// اتو اینکریمنت addressId
addressSchema.pre<IAddress>("save", async function (next) {
  if (!this.isNew || this.addressId) return next();
  try {
    const counter = await Counter.findOneAndUpdate(
      { name: "addressId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    this.addressId = counter.seq;
    next();
  } catch (error) {
    next(error as Error);
  }
});

const Address = models.Address || model<IAddress>("Address", addressSchema);
export default Address;
