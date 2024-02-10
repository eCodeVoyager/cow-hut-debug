import { Model } from "mongoose"

type UserName = {
    firstName: string, 
    lastName : string, 
}

export type IBuyer = {
    name: UserName,
    phoneNumber: string, 
    address: string, 
    budget: number,
    income: number,
}

export type BuyerModel = Model<IBuyer, Record<string, unknown>>