import { Schema, model, models, Document, Model } from "mongoose";

// اینو حتماً export کن
export interface IService extends Document {
  language: string;
  serviceId: number;
  title: string;
  image: string;
  subtitle: string;
  description: string;
  whyUs?: string;
  features?: string[];
}

const serviceSchema = new Schema<IService>(
  {
    language: { type: String, required: true },
    serviceId: { type: Number, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
    whyUs: { type: String },
    features: { type: [String] },
  },
  { timestamps: true }
);

// 🚨 index باید اینجا تعریف بشه نه داخل options
serviceSchema.index({ serviceId: 1, language: 1 }, { unique: true });

// مدل رو بساز
const Service: Model<IService> =
  models.Service || model<IService>("Service", serviceSchema);

export default Service;
