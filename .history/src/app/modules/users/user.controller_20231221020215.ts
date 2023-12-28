import { Request, Response } from 'express';
import { UserService } from './user.services';

const createUser = catchAsync(async (req: Request, res: Response) => {
    const { user, ...userData } = req.body;
    const result = await UserService.createUser(user, userData);
    sendResponse(res, {
        
    })
})