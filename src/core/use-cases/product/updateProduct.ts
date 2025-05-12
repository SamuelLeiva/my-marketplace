import { Product, CreateProductInput } from "@/contracts";
import { ProductRepository } from "@/core/ports";

export class UpdateProductUseCase {
  constructor(private repo: ProductRepository) {}

  async execute(id: string, input: Partial<CreateProductInput>): Promise<Product> {
    return this.repo.update(id, input);
  }
}