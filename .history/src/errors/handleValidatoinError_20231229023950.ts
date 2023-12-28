import mongoose from 'mongoose'
import { IGenericErrorMessage } from '../interface/interface'

const handleValidationError = (err: mongoose.Error.ValidationError) => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(elem => {
    return { path: elem.path, message: elem.message }
  })

    const statusCode = 400;
    return {
        statusCode,
        message: 'Validation Error', 
        errorMessages: errors
    }
}
