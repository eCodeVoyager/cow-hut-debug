import { Request, Response } from 'express';
import { UserService } from './user.services';
import status from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import catchAsync from '../../../shared/catchAsync';

const createUser = catchAsync(async (req: Request, res: Response) => {
    const { user } = req.body;
    console.log(user)
    const result = await UserService.createUser(user);
    console.log(result)
    sendResponse(res, {
        statusCode: ,
        success: true,
        message: "Successfully user has been creted",
        data: result,
    });
})

export const UserController = {
    createUser,
}