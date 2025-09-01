import { cookies } from "next/headers";
import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  const url = req.nextUrl.pathname;

  if (!url.includes("/api")) {
    if (url === "/" && !token) {
      return NextResponse.redirect(new URL("/boarding", req.url));
    }

    if ((url === "/boarding" || url.includes("/auth")) && token) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const matcher: MiddlewareConfig = {
  matcher: ["/:path"],
};
