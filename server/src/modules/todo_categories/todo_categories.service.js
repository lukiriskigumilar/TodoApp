import todo_categoriesRepository from "./todo_categories.repository.js";
import AppError from "../../helpers/appError.js";
import { v4 as uuidV4 } from "uuid";

//----------------------------
// SERVICE HELPER
//----------------------------
async function assertUserExist(userId, messageError) {
  const user = await todo_categoriesRepository.findUserById(userId)
  console.log(user)
  console.log(userId)
  if (!user) {
    throw new AppError(messageError, 404, {
      reason: "invalid user id",
    });
  }
  return user;
}

//------------------------
//SERVICE
//------------------------
const createTodoCategoriesService = async (data) => {
  const userId = data.user_id;
  await assertUserExist(userId, "Create todo category failed");

  const existsCategory =
    await todo_categoriesRepository.findTodosCategoriesByName(data.name);

  if (existsCategory) {
    throw new AppError("failed insert todo categories", 400, {
      reason: "todo categories name was exist",
    });
  }
  
  const payload = {
    id:uuidV4(),
    name:data.name,
    userId
  }

  return await todo_categoriesRepository.createTodosCategory(payload);
};

export default { createTodoCategoriesService };
