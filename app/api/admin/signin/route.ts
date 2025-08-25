// app/api/admin/signin/route.ts
import { NextRequest, NextResponse } from "next/server";
import { signinAdmin } from "@/controllers/adminAuth.controller";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = await signinAdmin({ body } as any);

    if (!result.success) {
      return NextResponse.json(result, { status: 400 });
    }

    const response = NextResponse.json(result, { status: 201 });

    response.cookies.set({
      name: "accessAdminToken",
      value: result.data.accessToken,
      httpOnly: true,      
      secure: process.env.NODE_ENV === "production", 
      sameSite: "strict",   
      maxAge: 60 * 60 * 24, 
      path: "/",            
    });

    return response;
  } catch (error: any) {
    console.error("خطا در مسیر API:", error);
    return NextResponse.json(
      { success: false, error: error.message || "خطای سرور" },
      { status: 500 }
    );
  }
}
