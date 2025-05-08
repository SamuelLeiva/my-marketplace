import { CreateReviewSchema } from "@/contracts"
import { ZodError } from "zod"

export function validateCreateReview(input: unknown) {
  const result = CreateReviewSchema.safeParse(input)

  if (!result.success) {
    // se puede personalizar el error aquí
    throw new ZodError(result.error.errors)
  }

  return result.data
}