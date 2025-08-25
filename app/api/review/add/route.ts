// app/api/user/me/route.ts
import { NextRequest, NextResponse } from "next/server";
import { verify } from "@/middleware/verifyUser.middleware";
import { addReview } from "@/controllers/review.controller";

// Define response types for better type safety
interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
  user?: any;
}

export async function POST(
  req: NextRequest
): Promise<NextResponse<ApiResponse>> {
  try {
    console.log(req)
    const user = await verify(req);
    if (!user) {
      return NextResponse.json(
        { success: false, message: "احراز هویت ناموفق", user: null },
        { status: 401 }
      );
    }
    const body = await req.json();
    console.log(body);
    const result = await addReview(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.message, user: null },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: result.message,
      data: result
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "خطای داخلی سرور";
    return NextResponse.json(
      { success: false, error: errorMessage, user: null },
      { status: 500 }
    );
  }
}
