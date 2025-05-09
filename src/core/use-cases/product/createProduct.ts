import { CreateProductInput, Product } from "@/contracts";
import { ProductRepository } from "@/core/ports";

export class CreateProductUseCase {
  constructor(private repo: ProductRepository) {}

  async execute(input: CreateProductInput): Promise<Product> {
    // validación o lógica extra podría ir aquí
    return this.repo.create(input);
  }
}
