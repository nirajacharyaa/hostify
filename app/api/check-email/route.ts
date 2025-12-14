import { getUserByEmail } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function HEAD(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const exists = await getUserByEmail(email);

  if (exists) {
    return new NextResponse(null, { status: 200 });
  } else {
    return new NextResponse(null, { status: 404 });
  }
}
