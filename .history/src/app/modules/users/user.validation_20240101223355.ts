import { z } from 'zod'

const createUserZodSchema = z.object({
  body: z.object({
    password: z
      .string({
        required_error: 'password is required',
      })
      .optional(),
    role: z
      .enum(['buyer', 'seller'], { required_error: 'role is required' })
      .optional(),
   
  }),
})

export const userValidation = {
  createUserZodSchema,
}
