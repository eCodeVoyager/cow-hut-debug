import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { SellerValidationZodSchema } from './seller.validation'
import { SellerController } from './seller.controller'
const router = express.Router()

router.post(
  '/create-seller',
  validateRequest(SellerValidationZodSchema.createSellerZodSchema),
  SellerController.createSeller,
)

router.get('/:id', SellerController.getSingleSeller);

router.patch('/:id', validateRequest(SellerValidationZodSchema.updateSellerZodSchema), SellerController.updateSeller);

router.delete('/:id', SellerController.deleteSeller);

router.get('/', SellerController.getAllSeller);


export const SellerRoutes= router;
