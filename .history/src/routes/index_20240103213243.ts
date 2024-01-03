import express from 'express';
import { UserRoutes } from '../app/modules/users/user.route';
const router = express.Router();


const moduleRoutes = [
    {
        path: '/users',
        route: UserRoutes,
    }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route)) // this is demonstarting -> router.use('/users', UserRoutes);
console.log(moduleRoutes)
export default router;
