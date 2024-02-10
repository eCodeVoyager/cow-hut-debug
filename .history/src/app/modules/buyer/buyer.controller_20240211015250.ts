import { NextFunction, Request } from "express";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import { BuyerFilterableFields } from "./buyer.constants";


const createBuyer = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const filters = pick(req.body, BuyerFilterableFields)
});

const BuyerController = {
    createBuyer, 
}