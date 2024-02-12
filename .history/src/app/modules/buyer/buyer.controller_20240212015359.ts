import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import { BuyerFilterableFields } from "./buyer.constants";
import { paginationData } from "../../../shared/filteringData";
import { BuyerServices } from "./buyer.services";
import sendResponse from "../../../shared/sendResponse";
import { OK } from "http-status";
import { IBuyer } from "./buyer.interface";
import { Buyer } from "./buyer.models";

const createBuyer = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { ...data } = req.body;
    const result = await BuyerServices.createBuyer(data);

    sendResponse(res, {
        success: true,
        statusCode: OK,
        message: "Buyers has been created successfully",
        data: result,
    })
    next();
});
const getSingleBuyer = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await BuyerServices.getSingleBuyer(id);
    sendResponse(res, {
      statusCode: OK,
      success: true,
      message: 'A Buyer retrived successfully',
      data: result,
    })
  })


const getAllBuyer = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const filters = pick(req.query, BuyerFilterableFields);
    const paginationOptions = pick(req.query, paginationData);
    const result = await BuyerServices.getAllBuyer(filters, paginationOptions);

    sendResponse<IBuyer[]>(res, {
        success: true,
        statusCode: OK,
        message: "All Buyer has retrived sucessfully",
        data: result.data, 
        meta: result.meta,
    });
    next();
});

export const BuyerController = {
    getAllBuyer, 
    createBuyer, 
    getSingleBuyer, 
    getAllBuyer, 
    deleteBuyer, 
    updateBuyer
}