import { Response } from "express";

type IApiResponse<T> = {
    statusCode: number,
    success: boolean,
    message?: string | null,
    data?: T | null,
    meta?: {
        page: number,
        limit: number,
        total: number,
    }
}

const sendResponse = <T>(res: Response, data: IApiResponse<T>): void => {
    const responseData: IApiResponse<T> = {
        statusCode: data.statusCode,
        success: data.success,
        message: data.message || null,
        data: data?.data || null,
        meta: data.meta /* || { page: 1, limit: 10, total: 0 } */, // Provide a default value
    };

    res.status(data.statusCode).json(responseData);
}

export default sendResponse;
