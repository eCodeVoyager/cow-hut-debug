import { Request, Response } from "express";
import config from "../../config";
import { IGenericErrorMessage } from "../../interface/interface";

const globalErrorHandler = (err, req: Request, res: Response) => {

    let statusCode = 500;
    let message = 'something went wrong';
    let errorMessage: IGenericErrorMessage[] = [];

    res.status(statusCode).json({
        success: false, 
        message, 
        errorMessaages, 
        statck: config.env !== 'production' ? err?.stack : undefined,
    })
}

export default globalErrorHandler;