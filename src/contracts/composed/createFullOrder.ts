import { z } from "zod"
import { CreateOrderSchema } from "../order"
import { CreateOrderItemSchema } from "../orderItem"

export const CreateFullOrderSchema = CreateOrderSchema.extend({
  items: z.array(CreateOrderItemSchema).min(1)
})

export type CreateFullOrderInput = z.infer<typeof CreateFullOrderSchema>