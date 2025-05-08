import { z } from "zod"

export const OrderSchema = z.object({
  id: z.string().uuid(),
  buyerId: z.string().uuid(),
  total: z.number().nonnegative(),
  status: z.enum(["pending", "paid", "shipped", "cancelled"]),
  createdAt: z.string().datetime(),
})

export const CreateOrderSchema = OrderSchema.omit({ id: true, createdAt: true })

export type Order = z.infer<typeof OrderSchema>
export type CreateOrderInput = z.infer<typeof CreateOrderSchema>
