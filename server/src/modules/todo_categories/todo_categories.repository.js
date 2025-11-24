import { db } from "../../config/db/index.js";
import { todoCategories,users } from "../../config/db/schema.js";
import {eq} from "drizzle-orm"
import { findById } from "../../shared/repositories/baseRepository.js";


export const findUserById = async (userId) =>{
    return await findById(users, userId)
}

const createTodosCategory = async(data) =>{
    const [todo_categories] = await db.insert(todoCategories).values(data).returning();
    return todo_categories;
}

const findTodosCategoriesByName = async(name) =>{
    const rows = await db
        .select()
        .from(todoCategories)
        .where(eq(todoCategories.name, name))
        return rows[0] ?? null;
}

const getTodoCategories = async (user_id) =>{
    const rows = await db
    .select({
        id: todoCategories.id,
        name:todoCategories.name,
    })
    .from(todoCategories)
    .leftJoin(users, eq(todoCategories.userId, users.id))
    .where(eq(todoCategories.userId, user_id))

    return rows;
}

export default{createTodosCategory, findTodosCategoriesByName, findUserById, getTodoCategories}