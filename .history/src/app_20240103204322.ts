import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import  { UserRoutes } from './app/modules/users/user.route'
import router from './routes';

const app: Application = express();

//handle middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//application route
/* app.use('/api/v1/users/', UserRoutes) */
app.use('/api/v1/', router)

app.get("/", (req:Request, res:Response) => {
    res.send("application is running successfully");
})

export default app;