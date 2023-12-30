import { ErrorRequestHandler, Request, Response } from 'express'
import config from '../../config'
import { IGenericErrorMessage } from '../../interface/interface'
import handleValidationError from '../../errors/handleValidatoinError'
import handleCastError from '../../errors/handleCastError'
import ApiError from '../../errors/apiError'

const globalErrorHandler: ErrorRequestHandler = (err, req: Request, res: Response) => {
  let statusCode = 500
  let message = 'something went wrong'
  let errorMessages: IGenericErrorMessage[] = []

  if (err?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  } else if (err.name === 'CastError') {
    const simplifiedError = handleCastError(err)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  } else if (err instanceof Error) {
     
    message = err?.message
    errorMessages = err.message ? [{ path: '', message: err?.message }] : []
  } else if (err instanceof ApiError) {
    statusCode = err?.statuscode;
    message = err?.message
    errorMessages = err?.message ? [{ path: '', message: err.message }] : []
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    statck: config.env !== 'production' ? err?.stack : undefined,
  })
}

export default globalErrorHandler
