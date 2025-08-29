// app/api/service/search/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getSearchServices } from "@/controllers/service.controller";

export async function GET(req: NextRequest) {
  try {
    console.log("dawdawd")
    const { searchParams } = new URL(req.url);
    const lang = searchParams.get("language") || "en"; 
    const query = searchParams.get("q") || "";

    if (typeof query !== 'string') {
      return NextResponse.json(
        { success: false, message: "Search query (q) is required", services: [] },
        { status: 400 }
      );
    }
console.log("lang",lang)
console.log("query",query)
    const result = await getSearchServices({ lang, query });

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