import { Model, Schema, model } from 'mongoose'
import { IUser } from './user.interface'


type UserModel = Model<IUser, {}>
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

export const User = model<IUser, UserModel >("User", userSchema);
