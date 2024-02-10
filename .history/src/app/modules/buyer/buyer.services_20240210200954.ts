import { IBuyer } from "./buyer.interface"
import { Buyer } from "./buyer.models"


const createBuyer =async ( payload: string): Promise<IBuyer | null> => {
    const result = await Buyer.create(payload);
    return result;
}

export const BuyerServices = {
    createBuyer,
}