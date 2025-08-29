// app/api/services/[serviceId]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getService } from "@/controllers/service.controller";

interface ApiResponse {
  success: boolean;
  message?: string;
  service?: any; // می‌تونی به جای any از Service استفاده کنی
}

export async function GET(
  req: NextRequest,
  { params }: { params: { serviceId: string } }
): Promise<NextResponse<ApiResponse>> {
  try {
    const { serviceId } = params;
    const { searchParams } = new URL(req.url);
    const lang = searchParams.get("lang") || "en";
    const result = await getService({ serviceId, lang });

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message, service: null },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: result.message,
      service: result.service
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "خطای داخلی سرور";
    return NextResponse.json(
      { success: false, message: errorMessage, service: null },
      { status: 500 }
    );
  }
}
