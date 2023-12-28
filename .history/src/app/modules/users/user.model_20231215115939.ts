import { Schema } from 'mongoose'
import { IUser } from './user.interface'

export const userSchema = new Schema<IUser | undefined>({
    phoneNumber: {
        type: String, 
        required: true,
        unique: true
    },
    role: {
        type: String, 
        enum: ["seller", 'buyer'],
        required: true,
    },
    password: {
        type: String, 
        required: true, 
    }
})
