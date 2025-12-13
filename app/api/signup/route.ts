import { type NextRequest, NextResponse } from "next/server";
import {
  createUser,
  generateAuthToken,
  getUserByEmail,
  setAuthCookie,
} from "@/lib/auth";
import { signUpSchema } from "@/schemas/auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validationResult = signUpSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          message: "Validation failed!!",
          errors: validationResult.error.issues,
        },
        { status: 400 },
      );
    }

    const { email, password } = validationResult.data;

    if (getUserByEmail(email)) {
      return NextResponse.json(
        { message: "User with this email already exists" },
        { status: 400 },
      );
    }

    const newUser = await createUser(email, password);

    const token = generateAuthToken(newUser);
    const response = NextResponse.json(
      {
        user: { id: newUser.id, email: newUser.email },
        token: token,
      },
      { status: 201 },
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
