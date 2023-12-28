import { Request, Response } from 'express';
import { UserService } from './user.services';
import {OK} from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import catchAsync from '../../../shared/catchAsync';

const createUser = catchAsync(async (req: Request, res: Response) => {
    const { user } = req.body;
    const result = await UserService.createUser(user);
    sendResponse(res, {
        statusCode: OK,
        success: true,
        message: "Successfully user has been creted",
        data: result,
    });
})

export const UserController = {
    createUser,
}