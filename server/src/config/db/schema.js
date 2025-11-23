import { pgTable, varchar, text, boolean, integer, timestamp } from "drizzle-orm/pg-core";

//USERS

export const users = pgTable("users", {
    id: varchar("id").primaryKey(),
    username: varchar("username").notNull().unique(),
});


// TODOS CATEGORIES
export const todoCategories = pgTable("todo_categories", {
    id:varchar("id").primaryKey(),
    name: varchar("name").notNull(),
    userId: varchar("user_id").notNull()
        .references(
            () => users.id, {onDelete: "cascade"}
        ),
    createdAt: timestamp("created_at").notNull().defaultNow(),
});

//TODOS
export const todos = pgTable("todos", {
    id: varchar("id").primaryKey(),
    userId: varchar("user_Id").notNull()
        .references(
            () => users.id, {onDelete: "cascade"}
        ),
    categoryId: varchar("category_id").notNull()
        .references(
            () => todoCategories.id, {onDelete: "cascade"}
        ),
    title: varchar('title').notNull(),
    desc: text("desc"),
    isCompleted: boolean("is_completed").default(false),
    priority: integer("priority"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
});
