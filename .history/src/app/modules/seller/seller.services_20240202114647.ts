import httpStatus, { BAD_REQUEST } from "http-status";
import ApiError from "../../../errors/apiError";
import { Seller } from "./seller.models"
import { ISeller } from "./seller.interface";


const createSeller = async (payload: string): Promise<ISeller> => {
    const result = await Seller.create(payload);
    if (!result) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'failed to create seller');
    }
    return result;
}

const getSingleSeller = async (id: string): Promise<ISeller | null> => {
    const result = await Seller.findById(id);
    if (!result) {
        throw new ApiError(BAD_REQUEST, 'Seller did not found');
    }
    return result;
}

const getAllSeller = async () : Promise<ISeller | null> => {
    const result = Seller.find();
    const total = Seller.countDocuments();
    return {
        meta: {
            page, 
            limit,
            total
        }
    };
}

export const SellerServices = {
    createSeller,
    getSingleSeller,
    getAllSeller
}