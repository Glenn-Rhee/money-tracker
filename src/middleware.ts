import { cookies } from "next/headers";
import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const cookieStore = await cookies();
  const isLaunched = cookieStore.get("token");

  const url = req.nextUrl.pathname;

  if (url === "/" && !isLaunched) {
    return NextResponse.redirect(new URL("/boarding", req.url));
  }

  if (url === "/boarding" && isLaunched) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const matcher: MiddlewareConfig = {
  matcher: ["/:path"],
};
