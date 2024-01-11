export type IGenericResponse<T> = {
    meta: {
        page: number, 
        limit: number, 
        toal: number, 
        totalCount: number,
    }, 
    data: T
}