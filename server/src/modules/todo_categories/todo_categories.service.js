import todo_categoriesRepository from "./todo_categories.repository.js";
import AppError from "../../helpers/appError.js";
import { v4 as uuidV4 } from "uuid";



const createTodoCategoriesService = async (data)=>{   
    
    const checkRelationUser = await todo_categoriesRepository.findUserById(data.user_id)
    if(!checkRelationUser){
        throw new AppError('failed insert todo categories',
            404,
            {
                reason:"user id not valid"
            }
        )
    }
    
    const existsCategory = await todo_categoriesRepository.findTodosCategoriesByName(data.name);
    if(existsCategory){
        throw new AppError('failed insert todo categories',
            400,
                {
                    reason:"todo categories name was exist"
                }
           
        )
    }
    const id = uuidV4();
    data.id = id;
    data.userId = data.user_id
    return await todo_categoriesRepository.createTodosCategory(data);
}

export default{createTodoCategoriesService}