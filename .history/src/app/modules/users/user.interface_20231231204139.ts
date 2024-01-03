import { Model } from 'mongoose';

export type IUser = {
    password: string, 
    role: "seller" | "buyer", 
}

export type UserModel = Model<IUser, object>