import { CreateReviewInput, Review } from "@/contracts"

export interface ReviewRepository {
  create(input: CreateReviewInput): Promise<Review>
  listByProduct(productId: string): Promise<Review[]>
  listByUser(userId: string): Promise<Review[]>
}