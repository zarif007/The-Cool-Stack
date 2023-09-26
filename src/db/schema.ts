import { integer, sqliteTable } from 'drizzle-orm/sqlite-core'

export const prompts = sqliteTable('prompts', {
    id: integer("id").primaryKey(),
    prompt: integer("prompt").notNull(),
    response: integer("response"),
})