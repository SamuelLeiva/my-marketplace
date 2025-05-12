import { describe, it, expect, vi } from "vitest";
import { DeleteProductUseCase } from "@/core/use-cases/product/deleteProduct";
import { ProductRepository } from "@/core/ports";
import { v4 as uuidv4 } from "uuid";

describe("DeleteProductUseCase", () => {
  it("should delete product by id", async () => {
    const mockRepo: ProductRepository = {
      delete: vi.fn(async (id: string) => {console.log(`Producto con id ${id} eliminado.`)}),
      list: vi.fn(),
      create: vi.fn(),
      getById: vi.fn(),
      listBySeller: vi.fn(),
      update: vi.fn(),
    };

    const id = uuidv4();

    const useCase = new DeleteProductUseCase(mockRepo);
    await useCase.execute(id);
    expect(mockRepo.delete).toHaveBeenCalledWith(id);
  });
});
