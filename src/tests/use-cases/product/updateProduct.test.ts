import { describe, it, expect, vi } from "vitest";
import { UpdateProductUseCase } from "@/core/use-cases/product/updateProduct";
import { Product } from "@/contracts";
import { ProductRepository } from "@/core/ports";
import { v4 as uuidv4 } from "uuid";

describe("UpdateProductUseCase", () => {
  it("should update product with given fields", async () => {
    const id = uuidv4();
    const sellerId = uuidv4();
    const categoryId = uuidv4();

    const updatedProduct: Product = {
      id,
      name: "Updated",
      description: "Actualizado",
      price: 100,
      imageUrl: "https://example.com/img.jpg",
      sellerId,
      categoryId,
      createdAt: new Date().toISOString(),
    };

    const mockRepo: ProductRepository = {
      create: vi.fn(),
      getById: vi.fn(),
      list: vi.fn(),
      listBySeller: vi.fn(),
      delete: vi.fn(),
      update: vi.fn(async (_id, _input) => {
        console.log(`Producto ${_id} actualizado con ${_input}`);
        return updatedProduct;
      }),
    };

    const useCase = new UpdateProductUseCase(mockRepo);

    const result = await useCase.execute(id, { name: "Updated", price: 100 });

    expect(result).toEqual(updatedProduct);
    expect(mockRepo.update).toHaveBeenCalledWith(id, {
      name: "Updated",
      price: 100,
    });
  });
});
