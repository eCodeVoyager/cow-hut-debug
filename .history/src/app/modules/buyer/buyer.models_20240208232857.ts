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
            },
        },
        address: {
            type: String,
            required: true,
          },
          phoneNumber: {
            type: String,
            required: true,
            unique: true,
          },
          budget: {
            type: Number,
            required: true,
          },
          income: {
            type: Number,
            required: false,
          },
        },
        {
          timestamps: true,
        },
)

export const Buyer = model<IBuyer, BuyerModel>("Buyers", buyerSchema);