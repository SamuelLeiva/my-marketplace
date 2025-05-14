import { User } from "@/contracts";
import { User as PrismaUser } from "@prisma/client";

export function normalizeUser(user: PrismaUser): User {
  return {
    ...user,
    role: user.role as "buyer" | "seller" | "admin",
    createdAt: user.createdAt.toISOString(),
  };
}