import { Model } from 'mongoose';

export type IUser = {
    password: string, 
    role: "seller" | "buyer", 
    name: string, 
    contact: string, 
    address: string, 
    budget: string, 
    income: string
}

export type UserModel = Model<IUser, object>