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

export type ISellerFilters = {
    searchTerm: string, 
    name: string, 
}