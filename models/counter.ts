import { Schema, model, models, Document } from "mongoose";

// تعریف اینترفیس برای تایپ
export interface ICounter extends Document {
  name: string;
  seq: number;
}

// تعریف اسکیمای مونگوس
const counterSchema = new Schema<ICounter>({
  name: { type: String, required: true },
  seq: { type: Number, required: true, default: 0 },
});

// ساخت مدل با بررسی وجود قبلی
const Counter = models.Counter || model<ICounter>("Counter", counterSchema);

export default Counter;
