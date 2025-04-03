// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index, pgTableCreator } from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `dejagifts_${name}`);

export const products = createTable("products", (t) => ({
	id: t.serial('id').primaryKey(),
	name: t.text('name').notNull(),
	description: t.text('description'),
	price: t.numeric('price').notNull(),
	imageUrl: t.text('image_url').notNull(),
	createdAt: t.timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
	updatedAt: t.timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`),
}))
