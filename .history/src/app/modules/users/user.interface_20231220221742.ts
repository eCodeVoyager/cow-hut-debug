import { Model } from 'mongoose';

export type IUser = {
    pasword: string, 
    role: ['seller', 'buyer'], 
    phoneNumber: string, 
    address: string, 
    budget: string, 
}

export type UserModel = Model<IUser, object>