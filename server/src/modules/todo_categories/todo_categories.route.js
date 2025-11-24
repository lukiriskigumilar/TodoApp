import express from "express"
import reqBodyValidator from "../../middleware/reqBodyValidator.js"
import { todoCategoriesSchema,getTodosCategoriesSchema } from "../../validators/todo_categories.validation.js"
import todo_categoriesController from "./todo_categories.controller.js"

const todoCategoriesRoute = express.Router()

todoCategoriesRoute.post('',reqBodyValidator(todoCategoriesSchema),todo_categoriesController.createTodoCategories)
todoCategoriesRoute.get('', reqBodyValidator(getTodosCategoriesSchema), todo_categoriesController.getTodoCategories)

export default todoCategoriesRoute