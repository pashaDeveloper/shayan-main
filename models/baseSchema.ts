// models/baseSchema.ts
import { Schema } from "mongoose";

export interface IBaseSchema {
  createdAt: Date;
  updatedAt: Date;
  status: "active" | "inactive";
  isDeleted: boolean;
  deletedAt?: Date | null;
}

export const BaseSchema = new Schema<IBaseSchema>(
  {
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    isDeleted: { type: Boolean, default: false },
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true }
);
