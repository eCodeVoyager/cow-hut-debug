import { BAD_REQUEST } from "http-status";
import ApiError from "../../../errors/apiError";
import { IBuyer } from "./buyer.interface"
import { Buyer } from "./buyer.models"


const createBuyer = async (payload: string): Promise<IBuyer | null> => {
    const result = await Buyer.create(payload);
    return result;
};

const getSingleBuyer = async (id: string): Promise<IBuyer|null> => {
    const result = await Buyer.findById(id);
    if (!result) { 
        throw new ApiError(BAD_REQUEST, 'something is went wrong!');
    }
}


export const BuyerServices = {
    createBuyer,
    getSingleBuyer
}