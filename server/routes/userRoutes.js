import express from 'express';
import userAuth from '../Middleware/userAuth.js';
import { getUserDetails } from '../controller/userController.js';
const userRouter = express.Router();

userRouter.get('/data', userAuth, getUserDetails );

export default userRouter;