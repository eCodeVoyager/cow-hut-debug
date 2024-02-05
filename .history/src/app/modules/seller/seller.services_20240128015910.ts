import { Seller } from "./seller.models"


const createSeller = async (payload: string) => {
    const result = await Seller.create(payload);
    return result;
}

export const SellerServices = {
    createSeller,
}