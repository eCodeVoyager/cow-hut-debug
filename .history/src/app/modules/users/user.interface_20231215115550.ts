import { Model } from 'mongoose';

export type IUser = {
    phoneNumber: "string",
    role: ["seller", 'buyer'],
    pasword: string, 
}

export type UserModel = Model<IUser, object>