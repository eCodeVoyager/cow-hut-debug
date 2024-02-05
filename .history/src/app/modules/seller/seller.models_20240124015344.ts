import { Schema } from "mongoose";
import { ISeller } from "./seller.interface";


const sellerSchema = new Schema<ISeller>()