// models/service.model.ts
import { Schema, model, models } from 'mongoose';

const serviceSchema = new Schema({
  language: { type: String, required: true },
  serviceId: { type: Number, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  whyUs: { type: String},
  features: { type: [String] },
}, {
  timestamps: true,
  indexes: [{ key: { serviceId: 1, language: 1 }, unique: true }],
});

const Service = models.Service || model('Service', serviceSchema);

export default Service;