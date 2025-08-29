import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function verifyAuth(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!token) {
    return NextResponse.json({ success: false, message: "لطفا مجدد ورود کنید" }, { status: 401 });
  }

  return { success: true, user: token };
}
