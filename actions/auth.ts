"use server";

import { cookies } from "next/headers";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const getAuth = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/me`, {
      headers: {
        Cookie: (await cookies()).toString(),
      },
    });

    const json = await response.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};
