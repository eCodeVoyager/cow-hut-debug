import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { SellerServices } from "./seller.services";
import sendResponse from "../../../shared/sendResponse";
import { OK } from "http-status";
import { SellerSearchableFileds } from "./seller.constants";
import pick from "../../../shared/pick";


const createSeller = catchAsync(async (req: Request, res: Response) => {
    const { data } = req.body;
    const result = await SellerServices.createSeller(data);

    sendResponse(res, {
        statusCode: OK,
        success: true, 
        message: 'Seller has been created Succesfully',
        data: result
    })
})

const getSingleSeller = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await SellerServices.getSingleSeller(id);
    sendResponse(res, {
        statusCode: OK, 
        success: true, 
        message: 'Seller retrived successfully',
        data: result,
    })
})

const getAllSeller = catchAsync(async (req: Request, res: Response) => {
    const paginationOptions = pick(req.query, paginationFields);
    const filters = pick(req.query, )
})

export const SellerController = {
    createSeller,
    getSingleSeller,
}