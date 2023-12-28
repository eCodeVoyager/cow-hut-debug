import { Model } from 'mongoose';

export type IUser = {
    pasword: string, 
    role: ['seller', 'buyer'], 
    name: string, 
    phoneNumber: string, 
    address: string, 
    budget: string, 
    income: string
}

export type UserModel = Model<IUser, object>