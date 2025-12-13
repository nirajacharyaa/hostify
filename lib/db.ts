import { createId } from "@paralleldrive/cuid2";
import * as bcrypt from "bcryptjs";
import type { User } from "@/schemas/auth";

const users: User[] = [
  {
    id: createId(),
    email: "test@hostify.com",
    passwordHash: bcrypt.hashSync("Test@123", 10),
  },
];

export default users;
