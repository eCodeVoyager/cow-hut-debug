import { Schema, model } from 'mongoose'
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
    }, 
    contact: {
        type: String, 
        required: true, 
    },
    address: {
        type: String, 
        required: true, 
    },
    budget: {
        type: String, 
        required: true, 
    },
    income: {
        type: String, 
        required: true, 
    }


})

export const UserModel = model("User", userSchema);
/* pasword: string, 
    role: ['seller', 'buyer'], 
    name: string, 
    phoneNumber: string, 
    address: string, 
    budget: string, 
    income: string */