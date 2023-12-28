import { Request, Response } from "express";
import config from "../../config";

const globalErrorHandler = (err, req: Request, res: Response) => {

    let statusCode = 500;

    res.status(statusCode).json({
        success: false, 
        message, 
        errorMessaages, 
        statck: config.env !== 'production' ? err?.stack : undefined
    })
}

export default globalErrorHandler;