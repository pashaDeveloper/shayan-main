
import { z } from "zod";

export const phoneSchema = z.object({
  phone: z
    .string()
    .regex(/^\+?\d{10,15}$/, "Please enter a valid phone number"),
});

export const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type PhoneFormData = z.infer<typeof phoneSchema>;
export type EmailFormData = z.infer<typeof emailSchema>;
