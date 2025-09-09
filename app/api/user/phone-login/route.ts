// app/api/user/signin/route.ts
import { NextRequest, NextResponse } from "next/server";
import { phoneLogin } from "@/controllers/userAuth.controller";

export async function POST(req: NextRequest) {
  try {
    console.log("مسیر API فراخوانی شد");
    const body = await req.json();
    console.log("API مسیر نتیجه:", body);
    const result = await phoneLogin({ body } as any);
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
