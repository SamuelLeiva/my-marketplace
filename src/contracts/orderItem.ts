import { z } from "zod"

export const OrderItemSchema = z.object({
  id: z.string().uuid(),
  orderId: z.string().uuid(),
  productId: z.string().uuid(),
  quantity: z.number().int().positive(),
  unitPrice: z.number().nonnegative(),
})

export type OrderItem = z.infer<typeof OrderItemSchema>