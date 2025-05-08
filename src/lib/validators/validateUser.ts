import { CreateUserSchema } from "@/contracts";
import { ZodError } from 'zod';

export function validateCreateUser(input: unknown) {
    const result = CreateUserSchema.safeParse(input)

    if(!result.success){
        throw new ZodError(result.error.errors)
    }

    return result.data
}