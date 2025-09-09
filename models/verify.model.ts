
import { Schema, model, models, Document } from "mongoose";
import connectDB from "@/libs/db";

connectDB();

export interface IVerify extends Document {
  phone?: string;
  email?: string;
  code: string;
  templateName: string;
  clientReferenceId: string;
  createdAt: Date;
  expiresAt: Date;
}

const verifySchema = new Schema<IVerify>({
  phone: { type: String, required: false, index: true },
  email: { type: String, required: false, index: true },
  code: { type: String, required: true },
  templateName: { type: String, required: true },
  clientReferenceId: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  expiresAt: { type: Date, required: true, index: { expires: "10m" } }, // TTL index for auto-deletion after 10 minutes
});

// Custom validation to ensure at least one of phone or email is provided
verifySchema.pre("validate", function (next) {
  const doc = this as IVerify;
  if (!doc.phone && !doc.email) {
    return next(new Error("At least one of phone or email is required"));
  }
  next();
});

// Optional: Add compound indexes for efficient queries
verifySchema.index({ phone: 1, expiresAt: 1 });
verifySchema.index({ email: 1, expiresAt: 1 });

const Verify = models.Verify || model<IVerify>("Verify", verifySchema);
export default Verify;
