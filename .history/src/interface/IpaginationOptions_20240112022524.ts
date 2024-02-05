import { SortOrder } from "mongoose"

export type IpaginationOptions = {
    page?: number, 
    limit?: number,
    sortOrder?: SortOrder,
    sortBy?: 'asc' | 'dsc',
}