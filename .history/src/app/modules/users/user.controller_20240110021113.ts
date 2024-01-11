import { Request, Response } from 'express';
import { UserService } from './user.services';
import status from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import catchAsync from '../../../shared/catchAsync';
import { filterData } from '../../../shared/filteringData';
import pick from '../../../shared/pick';


const createUser = catchAsync(async (req: Request, res: Response) => {
    const { user } = req.body;
    const result = await UserService.createUser(user);
    sendResponse(res, {
        statusCode:status.OK ,
        success: true,
        message: "Successfully user has been created",
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

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
    const paginationOptions = pick(req.query, filterData)
    const filters = pick(req.query,['role', 'searchTerm'])
    const result = await UserService.getAllUsers(paginationOptions, filters);
    
    sendResponse(res, {
        statusCode: status.OK,
        success: true, 
        message: 'retrived all users',
        data: result.data,
    })
})

export const UserController = {
    createUser,
    getSingleUser,
    getAllUsers
}