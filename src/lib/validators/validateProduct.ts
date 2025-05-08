import { CreateProductSchema } from "@/contracts/product"
import { ZodError } from "zod"

export function validateCreateProduct(input: unknown) {
  const result = CreateProductSchema.safeParse(input)

  if (!result.success) {
    // se puede personalizar el error aquí
    throw new ZodError(result.error.errors)
  }

  return result.data
}