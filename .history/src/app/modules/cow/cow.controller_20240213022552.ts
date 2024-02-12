import { OK } from "http-status"
import catchAsync from "../../../shared/catchAsync"
import sendResponse from "../../../shared/sendResponse"



const createCow = catchAsync(async (req: Request, res: Response) => {
    const { ...data } = req.body
    const result = await SellerServices.createSeller(data)
  
    sendResponse(res, {
      statusCode: OK,
      success: true,
      message: 'Seller has been created Succesfully',
      data: result,
    })
    console.log(result, 'this is controllers data')
  })
  
  const getSingleCow = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await SellerServices.getSingleSeller(id)
    sendResponse(res, {
      statusCode: OK,
      success: true,
      message: 'Seller retrived successfully',
      data: result,
    })
  })
  
  const getAllcow = catchAsync(
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
  
  const updateCow = catchAsync(
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
  
  const deleteCow = catchAsync(
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
   getSingleCow,
    getAllcow,
    updateCow,
      deleteCow,
    createCow
  }
  