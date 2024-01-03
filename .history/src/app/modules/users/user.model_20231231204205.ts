import {  Schema, model } from 'mongoose'
import { IUser, UserModel } from './user.interface'


export const userSchema = new Schema<IUser>({
    password: {
        type: String, 
        required: true, 
    }, 
   
    role: {
        type: String, 
        enum: ["seller", 'buyer'],
        required: true,
    },
})

export const User = model<IUser, UserModel >("User", userSchema);
