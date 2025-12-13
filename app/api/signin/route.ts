import { type NextRequest, NextResponse } from "next/server";
import {
  comparePassword,
  generateAuthToken,
  getUserByEmail,
  setAuthCookie,
} from "@/lib/auth";
import { loginSchema } from "@/schemas/auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validationResult = loginSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { message: "Validation failed", errors: validationResult.error.issues },
        { status: 400 },
      );
    }
    const { email, password } = validationResult.data;

    const user = getUserByEmail(email);
    const isAuthenticated =
      user && comparePassword(password, user.passwordHash);

    if (!isAuthenticated) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 },
      );
    }

    const token = generateAuthToken(user);
    const response = NextResponse.json(
      {
        user: { id: user.id, email: user.email },
        token: token,
      },
      { status: 200 },
    );

    setAuthCookie(response, token);
    return response;
  } catch {
    return NextResponse.json(
      { message: "An unexpected error occurred." },
      { status: 500 },
    );
  }
}
