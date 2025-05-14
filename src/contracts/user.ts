import { z } from "zod"

export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string(),
  role: z.enum(["buyer", "seller", "admin"]),
  createdAt: z.string().datetime(),
})

export const CreateUserSchema = UserSchema.omit({ id: true, createdAt: true })

export type User = z.infer<typeof UserSchema>
export type CreateUserInput = z.infer<typeof CreateUserSchema>
