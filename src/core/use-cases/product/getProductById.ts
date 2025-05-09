import { Product } from "@/contracts";
import { ProductRepository } from "@/core/ports";

export class GetProductByIdUseCase {
  constructor(private repo: ProductRepository) {}

  async execute(id: string): Promise<Product | null> {
    return this.repo.getById(id);
  }
}