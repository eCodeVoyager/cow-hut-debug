import { Schema, model } from "mongoose";
import { BuyerModel, IBuyer } from "./buyer.interface";


const buyerSchema = new Schema<IBuyer>({

})

const Buyer = model<IBuyer, BuyerModel>("Buyers", buyerSchema);