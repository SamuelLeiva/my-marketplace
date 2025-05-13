import { Category } from "@/contracts";
import { Category as PrismaCategory } from "@prisma/client";

export function normalizeCategory(category: PrismaCategory): Category {
  return {
    ...category,
    createdAt: category.createdAt.toISOString(),
    description: category.description ?? undefined,
  };
}