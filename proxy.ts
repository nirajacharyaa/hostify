import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import * as jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "";

const protectedRoutes = ["/become-a-host"];
const authRoutes = ["/login", "/signup"];

export function proxy(request: NextRequest) {
  const token = request.cookies.get("hostify_auth_token")?.value;
  const currentPath = request.nextUrl.pathname;

  if (protectedRoutes.includes(currentPath)) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
    } catch (error) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  if (token) {
    try {
      jwt.verify(token, JWT_SECRET);

      if (authRoutes.includes(currentPath)) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    } catch {
      const response = NextResponse.next();
      response.cookies.delete("hostify_auth_token");
      return response;
    }
  }

  return NextResponse.next();
}
