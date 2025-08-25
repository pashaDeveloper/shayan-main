import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";
import Counter from "./counter";
import validator from "validator";
import connectDB from "@/libs/db";
connectDB();

const { ObjectId } = mongoose.Schema.Types;

export interface IAdmin extends Document {
  _id: mongoose.Types.ObjectId;
  adminId: number;
  name: string;
  email: string;
  password: string;
  avatar: {
    url: string;
    public_id: string;
  };
  phone: string;
  role: "superAdmin" | "admin" | "operator" | "writer" | "publisher" | "vendor";
  adminLevel: "basic" | "verified" | "completed";
  address: mongoose.Types.ObjectId;
  bio: string;
  status: "active" | "inactive";
  isDeleted: boolean;
  deletedAt?: Date | null;
  resetToken?: string;
  resetTokenExpiry?: number;
  favorite?: mongoose.Types.ObjectId[];

  encryptedPassword(password: string): string;
  comparePassword(password: string): boolean;
}

const adminSchema = new Schema<IAdmin>(
  {
    adminId: { type: Number, unique: true },
    name: {
      type: String,
      required: [true, "لطفا نام خود را وارد کنید"],
      trim: true,
      minlength: [2, "نام باید حداقل 2 کاراکتر باشد"],
      maxlength: [50, "نام نمی‌تواند بیشتر از 50 کاراکتر باشد"],
    },
    email: {
      type: String,
      validate: {
        validator: function (this: IAdmin, value: string) {
          if (this.role === "admin" || this.role === "superAdmin") {
            return validator.isEmail(value);
          }
          return true;
        },
        message: "برای نقش مدیر یا مدیر کل، وارد کردن ایمیل معتبر الزامی است",
      },
      unique: [true, "این ایمیل قبلا ثبت شده است. لطفا ایمیل جدید وارد کنید"],
    },
    password: {
      type: String,
      required: [true, "لطفا یک رمز عبور قوی وارد کنید"],
      minlength: [6, "رمز عبور باید حداقل 6 کاراکتر باشد"],
      maxlength: [100, "رمز عبور باید حداکثر 100 کاراکتر باشد"],
    },
    avatar: {
      url: {
        type: String,
        default: "https://placehold.co/300x300.png",
        validate: {
          validator: function (this: IAdmin, value: string) {
            if (this.role === "admin" || this.role === "superAdmin") {
              return value && value !== "https://placehold.co/300x300.png";
            }
            return true;
          },
          message: "برای نقش مدیر یا مدیر کل، وارد کردن آواتار الزامی است",
        },
      },
      public_id: { type: String, default: "N/A" },
    },
    phone: {
      type: String,
      required: [true, "لطفا شماره تماس خود را وارد کنید"],
      unique: true,
    },
    role: {
      type: String,
      enum: ["superAdmin", "admin", "operator", "writer", "publisher", "vendor"],
      default: "operator",
    },
    adminLevel: {
      type: String,
      enum: ["basic", "verified", "completed"],
      default: "basic",
      required: true,
    },
    address: { type: ObjectId, ref: "Address" },
    bio: { type: String, trim: true, maxlength: 500, default: "" },
    resetToken: { type: String, default: undefined },
    resetTokenExpiry: { type: Number, default: undefined },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    isDeleted: { type: Boolean, default: false },
    deletedAt: { type: Date, default: null },
    favorite: { type: [ObjectId], ref: "Favorite", default: [] },
  },
  { timestamps: true }
);

// ----- Methods -----
adminSchema.methods.encryptedPassword = function (password: string): string {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

adminSchema.methods.comparePassword = function (password: string): boolean {
  return bcrypt.compareSync(password, this.password);
};

// ----- Hooks -----
adminSchema.pre<IAdmin>("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();
    this.password = this.encryptedPassword(this.password);
    next();
  } catch (error) {
    next(error as Error);
  }
});

adminSchema.pre<IAdmin>("save", async function (next) {
  if (!this.isNew || this.adminId) return next();
  try {
    const counter = await Counter.findOneAndUpdate(
      { name: "adminId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    this.adminId = counter.seq;
    next();
  } catch (error) {
    next(error as Error);
  }
});

// ----- Model -----
const Admin =
  (mongoose.models.Admin as mongoose.Model<IAdmin>) ||
  mongoose.model<IAdmin>("Admin", adminSchema);

export default Admin;
