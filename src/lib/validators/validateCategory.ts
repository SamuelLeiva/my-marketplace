
import { CreateCategorySchema } from "@/contracts"
import { ZodError } from "zod"

export function validateCreateCategory(input: unknown) {
  const result = CreateCategorySchema.safeParse(input)

  if (!result.success) {
    // se puede personalizar el error aquí
    throw new ZodError(result.error.errors)
  }

  return result.data
}