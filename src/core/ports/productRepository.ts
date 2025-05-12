import { CreateProductInput, Product } from "@/contracts";

export interface ProductRepository {
  create(input: CreateProductInput): Promise<Product>;
  getById(id: string): Promise<Product | null>;
  list(): Promise<Product[]>;
  listBySeller(sellerId: string): Promise<Product[]>;
  delete(id: string): Promise<void>;
  update(id: string, input: Partial<CreateProductInput>): Promise<Product | null>;
}
