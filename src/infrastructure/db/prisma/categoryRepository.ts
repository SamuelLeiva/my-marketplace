import { PrismaClient } from "@prisma/client";
import { CategoryRepository } from "@/core/ports";
import { Category, CreateCategoryInput } from "@/contracts";
import { normalizeCategory } from "./mappers/normalizeCategory";

const prisma = new PrismaClient();

export const PrismaCategoryRepository: CategoryRepository = {
  async create(input: CreateCategoryInput): Promise<Category> {
    const result = await prisma.category.create({
      data: {
        ...input,
        description: input.description ?? null,
      }
    });

    return normalizeCategory(result);
  },

  async list(): Promise<Category[]> {
    const results = await prisma.category.findMany();

    return results.map(normalizeCategory)
  },

  async getById(id: string): Promise<Category | null> {
    const result = await prisma.category.findUnique({
      where: { id },
    });

    return result ? normalizeCategory(result) : null;
  },
};
