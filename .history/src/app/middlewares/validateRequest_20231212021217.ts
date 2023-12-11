import { Request, Response, NextFunction } from 'express'
import { AnyZodObject, ZodEffects } from 'zod'

const validateRequest =
  (shema: AnyZodObject | ZodEffects <AnyZodObject>) =>
  async (req: Request, res: Response, next: NextFunction) => {
      try {
          await shema.parseAsync({
              body: req.body,
              query: req.query, 
              params: req.params, 
              cookies: req.cookies,
          })
          return next();
      } catch (error) {
          next(error)
    }
  }

eport default validateRequest;