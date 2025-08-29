// app/api/reviews/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getReviews } from "@/controllers/review.controller";

interface ApiResponse {
  success: boolean;
  message?: string;
  reviews?: any;
}

export async function GET(
  req: NextRequest,
  { params }: { params: { targetId: any } }
): Promise<NextResponse<ApiResponse>> {
  try {
    const { searchParams } = new URL(req.url);
    const { targetId } = params;
    const targetModel = searchParams.get("targetModel");
    if (!targetId || !targetModel) {
      return NextResponse.json(
        {
          success: false,
          message: "targetId و targetModel الزامی هستند",
          reviews: []
        },
        { status: 400 }
      );
    }

    // پاس دادن به سرویس
    const result = await getReviews({ targetId, targetModel });

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message, reviews: [] },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: result.message,
      reviews: result.reviews
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "خطای داخلی سرور";
    return NextResponse.json(
      { success: false, message: errorMessage, reviews: [] },
      { status: 500 }
    );
  }
}
