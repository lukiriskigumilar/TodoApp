import Joi from "joi";

export const todoCategoriesSchema = Joi.object({
    user_id:Joi.string().min(3).max(50).pattern(/^[A-Za-z0-9@._-]+$/).required(),
    name:Joi.string().min(3).max(50).pattern(/^[A-Za-z0-9@._-]+$/).required(),
})

export const getTodosCategoriesSchema = Joi.object({
    user_id:Joi.string().min(3).max(50).pattern(/^[A-Za-z0-9@._-]+$/).required(),
})