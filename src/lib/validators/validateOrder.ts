import { CreateOrderSchema } from "@/contracts"
import { ZodError } from "zod"

export function validateCreateOrder(input: unknown) {
  const result = CreateOrderSchema.safeParse(input)

  if (!result.success) {
    // se puede personalizar el error aquí
    throw new ZodError(result.error.errors)
  }

  return result.data
}