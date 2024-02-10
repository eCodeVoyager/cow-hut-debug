import { BAD_REQUEST } from 'http-status'
import ApiError from '../../../errors/apiError'
import { IBuyer, IBuyerFilter } from './buyer.interface'
import { Buyer } from './buyer.models'
import { IGenericResponse } from '../../../shared/IGenericResponse'
import { IpaginationOptions } from '../../../interface/IpaginationOptions'
import { BuyerSearchableFields } from './buyer.constants'

const createBuyer = async (payload: string): Promise<IBuyer | null> => {
  const result = await Buyer.create(payload)
  return result
}

const getSingleBuyer = async (id: string) => {
  const result = await Buyer.findById(id)
  if (!result) {
    throw new ApiError(BAD_REQUEST, 'something is went wrong!')
  }
  return result
}

const getAllBuyer = async (
  paginationOptions: IpaginationOptions,
  filters: IBuyerFilter,
): Promise<IGenericResponse<IBuyer[] | undefined>> => {
  // search and filteration features
  const { searchTerm, ...filtersData } = filters
  const searchAndFiltersCondition = []

  // search implementation
  if (searchTerm) {
    searchAndFiltersCondition.push({
      $or: BuyerSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    })
  }
}

export const BuyerServices = {
  createBuyer,
  getSingleBuyer,
  getAllBuyer,
}
