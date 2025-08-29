// app/api/services/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getServices } from "@/controllers/service.controller";

interface ApiResponse {
  success: boolean;
  message?: string;
  services?: any; // می‌تونی به‌جای any از Service[] استفاده کنی
}

export async function GET(req: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const { searchParams } = new URL(req.url);
    const lang = searchParams.get("lang") || "en";
    const result = await getServices({ lang });

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message, services: [] },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: result.message,
      services: result.services,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "خطای داخلی سرور";
    return NextResponse.json(
      { success: false, message: errorMessage, services: [] },
      { status: 500 }
    );
  }
}