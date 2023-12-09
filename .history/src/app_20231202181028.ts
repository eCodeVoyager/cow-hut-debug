import express, {Application, Request, Response, NextFunction} from 'express';
import cors from 'cors';
import httpStatus from 'http-status';

const app: Application = express();

//handle middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req:Request, res:Response) => {
    res
})

export default app;