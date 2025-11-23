import {db} from "../../config/db//index.js"
import {eq} from 'drizzle-orm'

export const findById = async (table, id) => {
    const doc = await db.select().from(table).where(eq(table.id, id))
    return doc[0] ?? null;
}
