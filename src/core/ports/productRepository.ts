import { CreateProductInput, Product } from "@/contracts";

export interface ProductRepository {
  create(input: CreateProductInput): Promise<Product>;
  findById(id: string): Promise<Product | null>;
  findAll(): Promise<Product[]>;
}
