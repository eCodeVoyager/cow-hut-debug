import { Schema, model } from 'mongoose'
import { ISeller, SellerModel } from './seller.interface'

const sellerSchema = new Schema<ISeller, SellerModel>({
  name: {
    type: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    required: true,
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
    required: true,
  },
})

export const Seller = model<ISeller, SellerModel>('Seller', sellerSchema);