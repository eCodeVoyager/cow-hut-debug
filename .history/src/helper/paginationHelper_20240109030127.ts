
import {SortOrder} from 'mongoose'

type IOptions = {
    page?: number, 
    limit?: number,
    sortBy?: string, 
    sortOrder: SortOrder, 
}