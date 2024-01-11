
import {SortOrder} from 'mongoose'

type IOptions = {
    page?: number, 
    limit?: number,
    sortBy?: string, 
    sortOrder: SortOrder, 
}

const calculatePagination = (option: IOptions) => {
    const page = Number(option.page) || 1;
    const limit = Number(option.limit) || 10;
    const skip = (page - 1) * limit;
    return {
        page, 
        limit, 
        skip
    }
}

export default calculatePagination;