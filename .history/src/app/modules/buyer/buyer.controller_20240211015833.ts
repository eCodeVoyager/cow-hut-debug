import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import { BuyerFilterableFields } from "./buyer.constants";
import { paginationData } from "../../../shared/filteringData";
import { BuyerServices } from "./buyer.services";
import sendResponse from "../../../shared/sendResponse";
import { OK } from "http-status";


const getAllBuyer = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const filters = pick(req.body, BuyerFilterableFields);
    const paginationOptions = pick(req.body, paginationData);
    const result = await BuyerServices.getAllBuyer(filters, paginationOptions);

    sendResponse(res, {
        success: true,
        statusCode: OK,
        message: "All Buyer has retrived sucessfully",
        data: result.data, 
        meta: result.meta,
    });
    next();
});

const BuyerController = {
    getAllBuyer, 
}