import { Schema } from "mongoose";

export interface IBaseSchema {
  status: "active" | "inactive";
  isDeleted: boolean;
  deletedAt?: Date | null;
}

export const BaseSchema = new Schema<IBaseSchema>(
  {
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { _id: false }
);