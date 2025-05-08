import { z } from "zod"

export const ReviewSchema = z.object({
  id: z.string().uuid(),
  productId: z.string().uuid(),
  authorId: z.string().uuid(),
  rating: z.number().int().min(1).max(5),
  comment: z.string().optional(),
  createdAt: z.string().datetime(),
})

export const CreateReviewSchema = ReviewSchema.omit({ id: true, createdAt: true })

export type Review = z.infer<typeof ReviewSchema>
export type CreateReviewInput = z.infer<typeof CreateReviewSchema>
