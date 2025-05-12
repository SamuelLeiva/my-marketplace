import { PrismaClient } from "@prisma/client";
import { ProductRepository } from "@/core/ports";
import { CreateProductInput, Product } from "@/contracts";
import { normalizeProduct } from "./mappers/normalizeProduct";

const prisma = new PrismaClient();

export const productRepository: ProductRepository = {
  async create(input: CreateProductInput): Promise<Product> {
    const result = await prisma.product.create({
      data: {
        ...input,
        description: input.description ?? null,
        imageUrl: input.imageUrl ?? null,
      },
    });
    return normalizeProduct(result);
  },
  async getById(id: string): Promise<Product | null> {
    const result = await prisma.product.findUnique({ where: { id } });
    return result ? normalizeProduct(result) : null;
  },

  async list(): Promise<Product[]> {
    const results = await prisma.product.findMany();
    return results.map(normalizeProduct);
  },

  async listBySeller(sellerId: string): Promise<Product[]> {
    const results = await prisma.product.findMany({ where: { sellerId } });
    return results.map(normalizeProduct);
  },

  async update(id: string, input: Partial<CreateProductInput>): Promise<Product | null> {
    const result = await prisma.product.update({
      where: { id },
      data: {
        ...input,
        description: input.description ?? null,
        imageUrl: input.imageUrl ?? null,
      },
    });
    return normalizeProduct(result);
  },

  async delete(id: string): Promise<void> {
    await prisma.product.delete({ where: { id } });
  },
};
