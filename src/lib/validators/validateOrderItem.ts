import { CreateOrderItemSchema } from "@/contracts"
import { ZodError } from "zod"

export function validateCreateOrderItem(input: unknown) {
  const result = CreateOrderItemSchema.safeParse(input)

  if (!result.success) {
    // se puede personalizar el error aquí
    throw new ZodError(result.error.errors)
  }

  return result.data
}