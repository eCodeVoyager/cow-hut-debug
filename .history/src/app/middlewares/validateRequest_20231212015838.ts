import { Request, Response, NextFunction} from 'express';
import { AnyZodObject, ZodEffects } from 'zod';

const validateRequest = async (shema: AnyZodObject | ZodEffects) => async (Req: Request, res:Response, next:NextFunction) => {
    
}