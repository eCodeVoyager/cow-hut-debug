
import {SortOrder} from 'mongoose'

type IOptions = {
    page?: number, 
    limit?: number,
    sortBy?: string, 
    sortOrder: SortOrder, 
}


const calculatePagination = (options: IOptions) => {
    const page = Number(options.page) || 1;
    const limit = Number(options.limit) || 10;
    const skip = (page - 1) * limit;
    const sortBy = options.sortBy || 'createdAt';
    return {
        page, 
        limit, 
        skip
    }
}

export default calculatePagination;