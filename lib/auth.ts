import * as jwt from "jsonwebtoken";
import type { NextResponse } from "next/server";
import type { User } from "@/schemas/auth";
import users from "./db";
import { createId } from "@paralleldrive/cuid2";
import * as bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET || "";
const TOKEN_EXPIRY = "7d";

export function getUserByEmail(email: string): User | undefined {
  return users.find((user) => user.email === email);
}

export async function createUser(
  email: string,
  password: string,
): Promise<User> {
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  const newUser: User = {
    id: createId(),
    email,
    passwordHash,
  };
  users.push(newUser);
  console.log("new users===>", users);
  return newUser;
}

export function comparePassword(password: string, hash: string): boolean {
  return bcrypt.compareSync(password, hash);
}

export function generateAuthToken(user: Pick<User, "id" | "email">): string {
  const payload = {
    userId: user.id,
    email: user.email,
  };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });
}

export function setAuthCookie(response: NextResponse, token: string): void {
  response.cookies.set("hostify_auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
}

export function clearAuthCookie(response: NextResponse): void {
  response.cookies.set("hostify_auth_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    expires: new Date(0),
    path: "/",
  });
}
