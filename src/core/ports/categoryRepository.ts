import { Category, CreateCategoryInput } from "@/contracts";

export interface CategoryRepository {
  create(input: CreateCategoryInput): Promise<Category>;
  list(): Promise<Category[]>;
  getById(id: string): Promise<Category | null>;
}
