import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { SellerServices } from "./seller.services";


const createSeller = catchAsync(async (req: Request, res: Response) => {
    const { data } = req.body;
    const result = await SellerServices.createSeller(data);
})