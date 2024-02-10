import { BAD_REQUEST } from "http-status";
import ApiError from "../../../errors/apiError";
import { IBuyer } from "./buyer.interface"
import { Buyer } from "./buyer.models"
import { IGenericResponse } from "../../../shared/IGenericResponse";
import { IpaginationOptions } from "../../../interface/IpaginationOptions";


const createBuyer = async (payload: string): Promise<IBuyer | null> => {
    const result = await Buyer.create(payload);
    return result;
};

const getSingleBuyer = async (id: string) => {
    const result = await Buyer.findById(id);
    if (!result) { 
        throw new ApiError(BAD_REQUEST, 'something is went wrong!');
    }
    return result;
}

const getAllBuyer = async (paginationOptions: IpaginationOptions, filters: IBuyerFilters ): Promise<IGenericResponse<IBuyer[]>> => {
    
} 


export const BuyerServices = {
    createBuyer,
    getSingleBuyer, 
    getAllBuyer,
}