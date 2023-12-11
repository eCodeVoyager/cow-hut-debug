import { Request, Response, NextFunction } from 'express'
import { AnyZodObject, ZodEffects } from 'zod'

const validateRequest =
  (shema: AnyZodObject | ZodEffects <AnyZodObject>) =>
  async (Req: Request, res: Response, next: NextFunction) => {
      try {
        await 
    } catch (error) {}
  }
