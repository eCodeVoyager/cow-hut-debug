import { Request, Response } from "express";
import config from "../../config";
import { IGenericErrorMessage } from "../../interface/interface";
import handleValidationError from "../../errors/handleValidatoinError";

const globalErrorHandler = (err, req: Request, res: Response) => {

    let statusCode = 500;
    let message = 'something went wrong';
    let errorMessages: IGenericErrorMessage[] = [];

    if (err?.name === 'ValidationError') {
        const simplifiedError = handleValidationError();
    }

    res.status(statusCode).json({
        success: false, 
        message, 
        errorMessages, 
        statck: config.env !== 'production' ? err?.stack : undefined,
    })
}

export default globalErrorHandler;