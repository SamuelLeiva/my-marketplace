import { z } from "zod"

export const ReviewSchema = z.object({
  id: z.string().uuid(),
  productId: z.string().uuid(),
  authorId: z.string().uuid(),
  rating: z.number().int().min(1).max(5),
  comment: z.string().optional(),
  createdAt: z.string().datetime(),
})

export type Review = z.infer<typeof ReviewSchema>