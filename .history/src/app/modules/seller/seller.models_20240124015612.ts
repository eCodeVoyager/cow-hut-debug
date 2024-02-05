import { Schema } from 'mongoose'
import { ISeller, SellerModel } from './seller.interface'

const sellerSchema = new Schema<ISeller, SellerModel>(
    {
        name: {
            type: {
                firstName: {
                    type: String, 
                    required: true,
                },
                lastName: {
                    type: String, 
                    required: true,
                }
            },
            required: true,
    }}
)
