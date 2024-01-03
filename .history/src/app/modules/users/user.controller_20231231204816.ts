import { Request, Response } from 'express';
import { UserService } from './user.services';
import status from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import catchAsync from '../../../shared/catchAsync';

const createUser = catchAsync(async (req: Request, res: Response) => {
    const { user } = req.body;
    const result = await UserService.createUser(user);
    sendResponse(res, {
        statusCode:status.OK ,
        success: true,
        message: "Successfully user has been creted",
        data: result,
    });
})

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await UserService.getSingleUser(id);
    sendResponse(res, {
        statusCode: status.OK,
        success: true, 
        message: "User Successfully retrived",
        data: result
    })

})

export const UserController = {
    createUser,
    getSingleUser,
}