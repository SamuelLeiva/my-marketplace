import { z } from "zod"

export const ProductSchema = z.object({
  id: z.string().uuid(),
  sellerId: z.string().uuid(),
  name: z.string().min(1),
  description: z.string().optional(),
  price: z.number().positive(),
  imageUrl: z.string().url().optional(),
  categoryId: z.string().uuid(),
  createdAt: z.string().datetime(),
})

export const CreateProductSchema = ProductSchema.omit({ id: true, createdAt: true })

export type Product = z.infer<typeof ProductSchema>
export type CreateProductInput = z.infer<typeof CreateProductSchema>