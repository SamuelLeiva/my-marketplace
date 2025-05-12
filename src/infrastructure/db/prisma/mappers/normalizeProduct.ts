import { Product } from "@/contracts";
import { Product as PrismaProduct } from "@prisma/client";

export function normalizeProduct(product: PrismaProduct): Product {
  return {
    ...product,
    createdAt: product.createdAt.toISOString(),
    description: product.description ?? undefined,
    imageUrl: product.imageUrl ?? undefined,
  };
}