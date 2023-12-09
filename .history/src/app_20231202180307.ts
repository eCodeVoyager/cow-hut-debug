import express, {Application, Request, Response, NextFunction} from 'express';
import cors from 'cors';
import httpStatus from 'http-status';


//handle middleware
app.use(cors());