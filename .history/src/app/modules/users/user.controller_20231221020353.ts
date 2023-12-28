import { Request, Response } from 'express';
import { UserService } from './user.services';
import httpStatus from 'http-status';

const createUser = catchAsync(async (req: Request, res: Response) => {
    const { user, ...userData } = req.body;
    const result = await UserService.createUser(user, userData);
    sendResponse(res, {
        statusCode: httpStatus.Ok,
        success: true, 
        message: "Successfully user has benn creted",
        data: result,
    })
})