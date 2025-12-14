import * as jwt from "jsonwebtoken";
import { type NextRequest, NextResponse } from "next/server";
import { getUserByEmail } from "@/lib/auth";

const JWT_SECRET = process.env.JWT_SECRET || "";
export async function GET(req: NextRequest) {
  console.log("hello is this workingggg!!!!");
  const token = req.cookies.get("hostify_auth_token")?.value;
  console.log("token=====>", token);
  if (!token) {
    return NextResponse.json({ user: null }, { status: 200 });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      userId: string;
      email: string;
    };
    const user = getUserByEmail(decoded.email);

    if (!user) {
      return NextResponse.json({ user: null }, { status: 200 });
    }

    return NextResponse.json(
      {
        user: { id: user.id, email: user.email },
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json({ user: null }, { status: 200 });
  }
}
