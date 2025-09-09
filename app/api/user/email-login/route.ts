
import { NextRequest, NextResponse } from "next/server";
import { emailLogin } from "@/controllers/userAuth.controller";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = await emailLogin({ body } as any);
    if (!result.success) {
      return NextResponse.json(result, { status: 400 });
    }

    const response = NextResponse.json(result, { status: 201 });

    return response;
  } catch (error: any) {
    console.error("خطا در مسیر API:", error);
    return NextResponse.json(
      { success: false, error: error.message || "خطای سرور" },
      { status: 500 }
    );
  }
}
