import { IUser } from "./user.interface";
import { User } from "./user.model";


const createUser = async(payload: IUser):Promise<IUser> => {
    const result = User.create(payload);
    return result;
}
export const UserService = {
    createUser
}