import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { userValidation } from './user.validation';
const router = express.Router();

router.post('/create-user', validateRequest(userValidation.createUserZodSchema), UserController.createUser);
router.patch('/: id',UserController.updateUser)
router.get("/:id", UserController.getSingleUser)
router.get('/', UserController.getAllUsers);


export const UserRoutes = router;