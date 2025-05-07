import { z } from "zod"

export const OrderSchema = z.object({
  id: z.string().uuid(),
  buyerId: z.string().uuid(),
  total: z.number().nonnegative(),
  status: z.enum(["pending", "paid", "shipped", "cancelled"]),
  createdAt: z.string().datetime(),
})

export type Order = z.infer<typeof OrderSchema>