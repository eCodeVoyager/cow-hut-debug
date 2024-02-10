import { IBuyer } from "./buyer.interface"
import { Buyer } from "./buyer.models"


const createBuyer = async (payload: string): Promise<IBuyer | null> => {
    const result = await Buyer.create(payload);
    return result;
};

const getSingleBuyer = async (id: string): Promise<IBuyer | undefined> => {
    const result = await Buyer.findById(id);
}


export const BuyerServices = {
    createBuyer,
}