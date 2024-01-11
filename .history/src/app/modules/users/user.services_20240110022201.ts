import { SortOrder } from "mongoose";
import ApiError from "../../../errors/apiError";
import { IpaginationOptions } from "../../../interface/IpaginationOptions";
import { IGenericResponse } from "../../../shared/IGenericResponse";
import { IUser, IUserFilters } from "./user.interface";
import { User } from "./user.model";
import status from 'http-status'
import { PaginationHelper } from "../../../helper/paginationHelper";

const createUser = async(payload: IUser):Promise<IUser> => {
    const result =await User.create(payload);
    console.log(result)

    if (!result) {
        throw new ApiError(status.BAD_REQUEST, 'failed to create user')
    }

    return result;
}


const getSingleUser = async (id:string):Promise<IUser |null> => {
    const result = await User.findById(id);
    return result;
}

const getAllUsers = async (paginationOptions: IpaginationOptions, filters:IUserFilters): Promise<IGenericResponse<IUser[]>> => {
    const { searchTerm, filtersData } = filters; 
    const userFilterAndSearchCondition = [];
    const andCondition = {
        
    }


    // sorting users
    const { page = 1, limit = 10, sortBy, sortOrder, skip } =PaginationHelper.calculatePagination(paginationOptions)
    const sortCondition: {[key: string]: SortOrder } = {};
    if (sortBy && sortOrder) {
       sortCondition[sortBy] = sortOrder;
    }


    const result = await User.find().sort(sortCondition).skip(skip).limit(limit);
    const total = await User.countDocuments();
    return {
        data: result, 
        total, 
    };
}


export const UserService = {
    createUser, 
    getSingleUser,
    getAllUsers,
}