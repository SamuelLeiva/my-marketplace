// tests/unit/category/createCategory.test.ts
import { describe, it, expect, vi } from "vitest";
import { CreateCategoryUseCase } from "@/core/use-cases/category/createCategory";
import { Category } from "@/contracts";
import { v4 as uuidv4 } from "uuid";
import { CategoryRepository } from "@/core/ports";

describe("CreateCategoryUseCase", () => {
  it("should create a new category", async () => {
    const input = { name: "Electronics" };
    const mockCategory: Category = { id: uuidv4(), name: input.name, createdAt: new Date().toISOString() };

    const mockRepo: CategoryRepository = {
      create: vi.fn(async () => mockCategory),
      getById: vi.fn(),
      list: vi.fn(),
    };

    const useCase = new CreateCategoryUseCase(mockRepo);
    const result = await useCase.execute(input);

    expect(result).toEqual(mockCategory);
    expect(mockRepo.create).toHaveBeenCalledWith(input);
  });
});
