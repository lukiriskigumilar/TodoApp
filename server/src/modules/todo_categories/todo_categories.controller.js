import todo_categoriesService from "./todo_categories.service.js";
import sendSuccessResponse from "../../helpers/successResponse.js";



const createTodoCategories = async (req,res,next) =>{
    const data = req.body;

    try {
        const result= await todo_categoriesService.createTodoCategoriesService(data);
        sendSuccessResponse(res,"create todo categories successfully",result,200,null)
    } catch (error) {
        next(error)
    }
}

const getTodoCategories = async (req,res,next) => {
    const data = req.body;

    try {
        const result= await todo_categoriesService.getTodoCategories(data);
        sendSuccessResponse(
            res,"get data categories successfully",
            result,
            200,
            null
        )
    } catch (error) {
        next(error)
    }
}

export default{createTodoCategories, getTodoCategories}