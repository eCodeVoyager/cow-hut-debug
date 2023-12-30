import ApiError from "../../../errors/apiError";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import status from 'http-status'

const createUser = async(payload: IUser):Promise<IUser> => {
    const result = User.create(payload);
    console.log(result)

    if (!result) {
        throw new ApiError(status.BAD_REQUEST, 'failed to create user')
    }

    return result;
}


export const UserService = {
    createUser
}