import Joi from "joi";

export const registerSchema = Joi.object({
    username:Joi.string().min(3).max(50).pattern(/^[A-Za-z0-9@._-]+$/).required(),
})