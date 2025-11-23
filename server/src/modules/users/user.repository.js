import {db} from "../../config/db//index.js"
import {users} from "../../config/db//schema.js"
import {eq} from 'drizzle-orm'


const createUser = async (data) => {
    const [user] = await db.insert(users).values(data).returning();
    return user;
}

const findUserByUsername = async (username) =>{
    const rows = await db
    .select()
    .from(users)
    .where(eq(users.username, username))
    return rows[0] ?? null;
}

export default { createUser, findUserByUsername }