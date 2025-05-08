import { z } from "zod"

export const CategorySchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  description: z.string().optional(),
  createdAt: z.string().datetime(),
})

export const CreateCategorySchema = CategorySchema.omit({ id: true, createdAt: true })

export type Category = z.infer<typeof CategorySchema>
export type CreateCategoryInput = z.infer<typeof CreateCategorySchema>