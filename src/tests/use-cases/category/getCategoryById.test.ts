// tests/unit/category/getCategoryById.test.ts
import { describe, it, expect, vi } from "vitest";
import { GetCategoryByIdUseCase } from "@/core/use-cases/category/getCategoryById";
import { Category } from "@/contracts";
import { CategoryRepository } from "@/core/ports";
import { v4 as uuidv4 } from "uuid";

describe("GetCategoryByIdUseCase", () => {
    const validId = uuidv4();
    const mockCategory: Category = {
      id: validId,
      name: "Electronics",
      createdAt: new Date().toISOString(),
    };

    const mockRepo: CategoryRepository = {
      getById: vi.fn(async (id: string) =>
        id === mockCategory.id ? mockCategory : null
      ),
      list: vi.fn(),
      create: vi.fn(),
    };

    const useCase = new GetCategoryByIdUseCase(mockRepo);

    it("should return category when ID matches", async () => {
      const result = await useCase.execute(validId);
      expect(result).toEqual(mockCategory);
    });

    it("should return null when ID does not match", async () => {
      const result = await useCase.execute(uuidv4());
      expect(result).toBeNull();
    });
});
