import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { SellerServices } from "./seller.services";
import sendResponse from "../../../shared/sendResponse";
import { OK } from "http-status";
import { SellerSearchableFileds, sellerFilterableFields } from "./seller.constants";
import pick from "../../../shared/pick";
import { paginationData } from "../../../shared/filteringData";


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

const getAllSeller = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const paginationOptions = pick(req.query, paginationData);
    const filters = pick(req.query, ['searchTerm','name', 'budget', 'income', 'phoneNumber'])
    const result = await SellerServices.getAllSeller(paginationOptions, filters);

    sendResponse<ISeller[>(res, {
        statusCode: OK, 
        success: true, 
        message: "Sellers retrived successfully",
        data: result
    }),
    next()

})

export const SellerController = {
    createSeller,
    getSingleSeller,
}