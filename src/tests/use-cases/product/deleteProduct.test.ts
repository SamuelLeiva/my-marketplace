import { describe, it, expect, vi } from "vitest";
import { DeleteProductUseCase } from "@/core/use-cases/product/deleteProduct";
import { ProductRepository } from "@/core/ports";

describe("DeleteProductUseCase", () => {
  it("should delete product by id", async () => {
    const mockRepo: ProductRepository = {
      delete: vi.fn(async (id: string) => {}),
      list: vi.fn(),
      create: vi.fn(),
      getById: vi.fn(),
      listBySeller: vi.fn(),
      update: vi.fn(),
    };

    const useCase = new DeleteProductUseCase(mockRepo);
    await useCase.execute("some-id");
    expect(mockRepo.delete).toHaveBeenCalledWith("some-id");
  });
});
