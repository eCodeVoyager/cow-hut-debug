import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { SellerValidationZodSchema } from './seller.validation'
import { SellerController } from './seller.controller'
const router = express.Router()

router.post(
  '/create-seller',
  
  SellerController.createSeller,
)

router.get('/:id', SellerController.getSingleSeller);

router.get('/', SellerController.getAllSeller);

export const SellerRoutes= router;
