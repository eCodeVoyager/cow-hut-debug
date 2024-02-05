export type IpaginationOptions = {
    page?: number, 
    limit?: number,
    sortOrder?: string | undefined,
    sortBy?: 'asc' | 'dsc'  | undefined,
}