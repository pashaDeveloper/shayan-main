// middleware/verifyAdmin.middleware.ts
import { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

interface VerifyAdminResponse {
  success: boolean;
  message?: string;
  admin?: JwtPayload | null;
}

export const verifyAdmin = (req: NextRequest): VerifyAdminResponse => {
  try {
    const token = req.cookies.get("accessAdminToken")?.value;
    if (!token) {
      return {
        success: false,
        message: "لطفا مجدد ورود کنید",
        admin: null
      };
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

    return {
      success: true,
      message: "ورود موفقیت‌آمیز بود",
      admin: decoded
    };
  } catch (error) {
    return {
      success: false,
      message: "توکن نامعتبر یا منقضی شده",
      admin: null
    };
  }
};
