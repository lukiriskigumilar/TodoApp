import express from 'express'
import userRouter from '../modules/users/user.route.js';


const router = express.Router();

router.use('/user', userRouter)

export default router

