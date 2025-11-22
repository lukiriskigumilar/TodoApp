CREATE TABLE "todo_categories" (
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "todos" (
	"id" varchar PRIMARY KEY NOT NULL,
	"user_Id" varchar NOT NULL,
	"category_id" varchar NOT NULL,
	"title" varchar NOT NULL,
	"desc" text,
	"is_completed" boolean DEFAULT false,
	"priority" integer,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" varchar PRIMARY KEY NOT NULL,
	"username" varchar NOT NULL,
	CONSTRAINT "users_username_unique" UNIQUE("username")
);
--> statement-breakpoint
ALTER TABLE "todos" ADD CONSTRAINT "todos_user_Id_users_id_fk" FOREIGN KEY ("user_Id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "todos" ADD CONSTRAINT "todos_category_id_todo_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."todo_categories"("id") ON DELETE cascade ON UPDATE no action;