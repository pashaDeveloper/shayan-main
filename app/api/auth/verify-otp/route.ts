import { NextRequest, NextResponse } from "next/server";
import { verifyOtp } from "@/controllers/userAuth.controller";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = await verifyOtp({ body } as any);
    if (!result.success) {
      return NextResponse.json(result, { status: 400 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    console.error("خطا در مسیر API verify-otp:", error);
    return NextResponse.json(
      { success: false, message: error.message || "خطای سرور" },
      { status: 500 }
    );
  }
}
