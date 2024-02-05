import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { SellerServices } from "./seller.services";
import sendResponse from "../../../shared/sendResponse";
import { OK } from "http-status";


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

export const SellerController = {
    createSeller,
}