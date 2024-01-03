import express from 'express';
import { UserRoutes } from '../app/modules/users/user.route';
const router = express.Router();


router.use('/users', UserRoutes);

export default router;
