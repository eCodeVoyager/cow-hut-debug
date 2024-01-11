import ApiError from "../../../errors/apiError";
import { IpaginationOptions } from "../../../interface/IpaginationOptions";
import { IGenericResponse } from "../../../shared/IGenericResponse";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import status from 'http-status'

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

const getAllUsers = async (paginationOptions: IpaginationOptions): Promise<IGenericResponse<IUser[]>> => {
    const { page, limit } = paginationOptions;
    const skip = (page - 1) * limit;
    const result = await User.find().sort().skip().limit();
    const totalCount = await User.countDocuments();
    return {
        data: result, 
        totalCount,
        success: true,
    };
}


export const UserService = {
    createUser, 
    getSingleUser,
    getAllUsers,
}