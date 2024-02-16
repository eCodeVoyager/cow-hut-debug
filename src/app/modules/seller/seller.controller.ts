import { NextFunction, Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { SellerServices } from './seller.services'
import sendResponse from '../../../shared/sendResponse'
import { OK } from 'http-status'
import pick from '../../../shared/pick'
import { paginationData } from '../../../shared/filteringData'
import { ISeller } from './seller.interface'
import { sellerFilterableFields } from './seller.constants'

const createSeller = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body
  const { seller } = data
  const { phoneNumber, budget, income, address, name } = seller // mongodb direct data ney na.  destructuring kore nite hobe....
  const { firstName, lastName } = name
  console.log('this is seller data', data, req.body)
  const result = await SellerServices.createSeller({
    name: { firstName, lastName },
    address,
    phoneNumber,
    budget,
    income,
    //password model eo nai abar validate o koren nai req e dia lav ki? 
  })

  sendResponse(res, {
    statusCode: OK,
    success: true,
    message: 'Seller has been created Succesfully',
    data: result,
  })
  console.log(result, 'this is controllers data')
})

const getSingleSeller = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await SellerServices.getSingleSeller(id)
  sendResponse(res, {
    statusCode: OK,
    success: true,
    message: 'Seller retrived successfully',
    data: result,
  })
})

const getAllSeller = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const paginationOptions = pick(req.query, paginationData)
    const filters = pick(req.query, sellerFilterableFields)
    const result = await SellerServices.getAllSeller(paginationOptions, filters)

    sendResponse<ISeller[]>(res, {
      statusCode: OK,
      success: true,
      message: 'Sellers retrived successfully',
      data: result.data,
      meta: result.meta,
    })
    next()
  },
)

const updateSeller = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    const updatedData = req.body
    const result = await SellerServices.updateSeller(id, updatedData)
    sendResponse<ISeller>(res, {
      statusCode: OK,
      success: true,
      message: 'Sellers information has updated successfully',
      data: result,
    }),
      next()
  },
)

const deleteSeller = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    const result = await SellerServices.deleteSeller(id)
    sendResponse<ISeller>(res, {
      statusCode: OK,
      success: true,
      message: 'Seller deleted Successfully',
      data: result,
    }),
      next()
  },
)

export const SellerController = {
  createSeller,
  getSingleSeller,
  getAllSeller,
  updateSeller,
  deleteSeller,
}
