import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { userValidation } from './user.validation';
const router = express.Router();

router.post('/create-user', validateRequest(userValidation.createUserZodSchema), UserController.createUser);
router.get("/:id", UserController.getSingleUser)
export const UserRoutes = router;