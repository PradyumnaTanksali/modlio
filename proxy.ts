import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// modlio.corsw.in serves the full site. Every other host that reaches this
// project arrives through the *.corsw.in wildcard, and gets the showcase.
const FULL_SITE_HOSTS = new Set(["modlio.corsw.in", "localhost:3000"]);

export function proxy(req: NextRequest) {
  const host = (req.headers.get("host") ?? "").toLowerCase();
  const isWildcard =
    host.endsWith(".corsw.in") && !FULL_SITE_HOSTS.has(host) && host !== "corsw.in";

  if (isWildcard && req.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/showcase", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|brand).*)"],
};
