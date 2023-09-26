import Database from "better-sqlite3";
import { publicProcedure, router } from "./trpc";
import { migrate } from 'drizzle-orm/better-sqlite3/migrator'
import { prompts } from "@/db/schema";
import { drizzle } from 'drizzle-orm/better-sqlite3'

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite)
migrate(db, {migrationsFolder: "drizzle"})

export const appRouter = router({
    // api/trpc/getPrompts
    getPrompts: publicProcedure.query(async () => {
        return await db.select().from(prompts).all()
    })
})

export type AppRouter = typeof appRouter;