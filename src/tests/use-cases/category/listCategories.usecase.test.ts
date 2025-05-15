// tests/unit/category/listCategories.test.ts
import { describe, it, expect, vi } from "vitest";
import { ListCategoriesUseCase } from "@/core/use-cases/category/listCategories";
import { Category } from "@/contracts";
import { CategoryRepository } from "@/core/ports";
import { v4 as uuidv4 } from "uuid";

describe("ListCategoriesUseCase", () => {
  it("should return a list of categories", async () => {
    const mockCategories: Category[] = [
      { id: uuidv4(), name: "Electronics", createdAt: new Date().toISOString() },
      { id: uuidv4(), name: "Books", createdAt: new Date().toISOString() },
    ];

    const mockRepo: CategoryRepository = {
      list: vi.fn(async () => mockCategories),
      create: vi.fn(),
      getById: vi.fn(),
    };

    const useCase = new ListCategoriesUseCase(mockRepo);
    const result = await useCase.execute();

    expect(result).toEqual(mockCategories);
    expect(mockRepo.list).toHaveBeenCalled();
  });
});
