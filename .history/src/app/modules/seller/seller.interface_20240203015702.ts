import { Model } from "mongoose"

type UserName = {
    firstName: string,
    lastName: string, 
}

export type ISeller = {
    name: UserName,
    phoneNumber: string, 
    address: string, 
    budget: number, 
    income: number,
}

export type SellerModel =Model <ISeller,Record<string, unknown>>

export type ISellerFilters = {
    searchTerm: string, 
}