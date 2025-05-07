import { z } from "zod"

export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  email: z.string().email(),
  passwordHash: z.string(),
  role: z.enum(["buyer", "seller", "admin"]),
  createdAt: z.string().datetime(),
})

export type User = z.infer<typeof UserSchema>