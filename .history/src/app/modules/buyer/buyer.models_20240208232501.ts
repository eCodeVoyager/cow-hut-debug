import { Schema, model } from "mongoose";
import { BuyerModel, IBuyer } from "./buyer.interface";


const buyerSchema = new Schema<IBuyer>(
    {
        name: {
            firstName: {
                type: String, 
                required: true, 
            }, 
            lastName: {
                type: String, 
                required: true, 
            }
        }
    }
)

export const Buyer = model<IBuyer, BuyerModel>("Buyers", buyerSchema);