import { ZodError } from "zod";
import { IGenericErrorResponse } from "../common/interfaces";
import { IGenericErrorMessage } from "../interface/interface";

const handleZodError = (error:ZodError):IGenericErrorResponse => {
    const errors:IGenericErrorMessage[] = error.issues.map((issue) => {
        return {
            path: issue?.path[issue.path.length - 1],
            message: issue?.message,
        }
    })
    
}