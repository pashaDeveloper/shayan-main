// utils/jwt.util.ts
import jwt from "jsonwebtoken";

interface UserPayload {
  _id: string;
  name: string;
  avatar: {
    url: string | null;
    public_id: string | null;
  };
  role: "superAdmin" | "admin" | "operator" | "writer" | "publisher" | "vendor";
  adminLevel: "basic" | "verified" | "completed";
  email: string;
}

export default function generateAccessToken(admin: UserPayload): string {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET در متغیرهای محیطی تعریف نشده است");
  }

  try {
    return jwt.sign(
      {
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        avatar: admin.avatar,
        role: admin.role,
        adminLevel: admin.adminLevel,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
  } catch (error: any) {
    console.error("خطا در تولید توکن JWT:", error);
    throw new Error("خطا در تولید توکن دسترسی");
  }
}