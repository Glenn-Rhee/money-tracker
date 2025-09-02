import { cookies } from "next/headers";
import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";
import { ResponsePayload } from "./types";

export async function middleware(req: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  const url = req.nextUrl.pathname;

  if (!url.includes("/api")) {
    if (
      (url === "/" ||
        url.includes("/analysis") ||
        url.includes("/categories") ||
        url.includes("/profile") ||
        url.includes("/transactions")) &&
      !token
    ) {
      return NextResponse.redirect(new URL("/boarding", req.url));
    }

    if ((url === "/boarding" || url.includes("/auth")) && token) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  if (url.includes("/api")) {
    if ((url === "/api/auth/login" || url === "/api/auth/signup") && token) {
      return NextResponse.json<ResponsePayload>({
        status: "failed",
        statusCode: 409,
        message: "You are already logged in.",
      });
    }

    if (url === "/api/auth/logout" && !token) {
      return NextResponse.json<ResponsePayload>({
        status: "failed",
        statusCode: 409,
        message: "You have been logout!",
      });
    }
  }

  return NextResponse.next();
}

export const matcher: MiddlewareConfig = {
  matcher: ["/:path"],
};
