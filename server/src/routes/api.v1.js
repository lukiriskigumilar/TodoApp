import express from 'express'
import userRouter from '../modules/users/user.route.js';
import todoCategoriesRoute from '../modules/todo_categories/todo_categories.route.js';


const router = express.Router();

router.use('/user', userRouter)
router.use('/todo-categories', todoCategoriesRoute)

export default router

