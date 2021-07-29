const tableName = 'notes'

exports.up = (knex) => {
	return knex.schema.createTable(tableName, table => {
		table.increments('id').primary()
		table.string('title').notNullable()
		table.text('content').notNullable()
		table.string('hexColor').notNullable()
		table.date('date').defaultTo(Date.now())
	})
}

exports.down = (knex) => {
	return knex.schema.dropTable(tableName)
}
