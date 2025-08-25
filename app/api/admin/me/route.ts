// app/api/admin/me/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { verifyAdmin } from '@/middleware/verifyAdmin.middleware';
import { persistAdmin } from '@/controllers/adminAuth.controller';

// Define response types for better type safety
interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
  admin?: any; 
}

export async function GET(req: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const admin = await verifyAdmin(req).admin;
    if (!admin) {
      return NextResponse.json(
        { success: false, error: 'احراز هویت ناموفق', admin: null },
        { status: 401 }
      );
    }

    const result = await persistAdmin({ admin });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.message, admin: null },
        { status: 500 } 
      );
    }

    return NextResponse.json({
      success: true,
      message: result.message,
      admin: result.data,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'خطای داخلی سرور';
    return NextResponse.json(
      { success: false, error: errorMessage, admin: null },
      { status: 500 }
    );
  }
}