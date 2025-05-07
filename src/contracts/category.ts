import { z } from "zod"

export const CategorySchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  description: z.string().optional(),
})

export type Category = z.infer<typeof CategorySchema>