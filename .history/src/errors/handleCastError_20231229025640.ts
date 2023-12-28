import { Request, Response } from "express";
import mongoose from "mongoose";

const handleCastError = (err:mongoose.Error.CastError, req:Request, res:Response) => {
    
}