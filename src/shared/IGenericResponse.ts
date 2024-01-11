export type IGenericResponse<T> = {
    meta: {
        page: number, 
        limit: number, 
        toal: number, 
    }, 
    data: T
}