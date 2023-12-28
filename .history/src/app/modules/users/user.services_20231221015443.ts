import ApiError from "../../../errors/apiError";
import { IUser } from "./user.interface";
import { User } from "./user.model";


const createUser = async(payload: IUser):Promise<IUser> => {
    const result = User.create(payload);
    if (result = "") {
        throw new ApiError('failed to create user')
    }
    return result;
}


export const UserService = {
    createUser
}