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
