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
    contact: z.string({
      required_error: 'contact number is required',
    }),
    address: z.string({
      required_error: 'address is required',
    }),
    budget: z.number({
      required_error: 'budget is required',
    }),
    income: z.number().optional(),
    name: z.object({
      firstName: z.string({ required_error: 'first name is required' }),
      lastName: z.string({ required_error: 'last name is required' }),
    }),
  }),
})

export const userValidation = {
  createUserZodSchema,
}
