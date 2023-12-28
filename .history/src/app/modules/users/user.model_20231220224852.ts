import {  Schema, model } from 'mongoose'
import { IUser, UserModel } from './user.interface'


export const userSchema = new Schema<IUser>({
    password: {
        type: String, 
        required: true, 
    }, 
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

export const User = model<IUser, UserModel >("User", userSchema);
