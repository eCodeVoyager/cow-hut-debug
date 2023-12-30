import { z } from 'zod'

const createUserZodSchema = z.object({
    body: z.object({
        password: z
            .string({
                required_error: 'password is required',
            })
            .optional(),
    }),
});


export const userValidation = {
    createUserZodSchema
}