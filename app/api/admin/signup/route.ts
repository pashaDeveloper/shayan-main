// app/api/admin/signup/route.ts
import { NextRequest, NextResponse } from "next/server";
import { signupAdmin } from "@/controllers/adminAuth.controller";
import upload from "@/middleware/upload.middleware";


export async function POST(req: NextRequest) {
  try {
   const body = await req.json(); 
   console.log(body)
    const result = await signupAdmin({ body } as any);

    return NextResponse.json(result, {
      status: result.success ? 201 : 400,
    });
  } catch (error: any) {
    console.error("خطا در مسیر API:", error);
    return NextResponse.json(
      { success: false, error: error.message || "خطای سرور" },
      { status: 500 }
    );
  }
}
