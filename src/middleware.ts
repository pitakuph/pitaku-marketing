import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const cookieName = "ab_test_variant";
  let variant = req.cookies.get(cookieName)?.value;

  // If no variant is assigned, randomly assign one
  if (!variant) {
    variant = Math.random() < 0.5 ? "A" : "B"; // 50-50 split
    const res = NextResponse.next();
    res.cookies.set(cookieName, variant, { httpOnly: true, path: "/" });
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/contact", // Apply middleware only to the sign-up page
};
