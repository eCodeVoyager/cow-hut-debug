import { Request, Response } from "express";
import mongoose from "mongoose";
import { IGenericErrorMessage } from "../interface/interface";

const handleCastError = (err:mongoose.Error.CastError) => {
    const errors: IGenericErrorMessage[] = [
        {
            path: err?.path, 
            message: err?.message,
        }
    ] 
    const statusCode = 400;
    return {
        statusCode, 
        message: 'Cast Error (this is appearing for wrong id)',
        errorMessages : errors,
    }
}

export default handleCastError;