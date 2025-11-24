import express from "express"
import reqBodyValidator from "../../middleware/reqBodyValidator.js"
import { todoCategoriesSchema } from "../../validators/todo_categories.validation.js"
import todo_categoriesController from "./todo_categories.controller.js"

const todoCategoriesRoute = express.Router()
todoCategoriesRoute.post('',reqBodyValidator(todoCategoriesSchema),todo_categoriesController.createTodoCategories)

export default todoCategoriesRoute