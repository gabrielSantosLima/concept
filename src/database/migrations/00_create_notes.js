const tableName = 'notes'

// Método que será executado para criar a tabela de Notas ("notes")
exports.up = (knex) => {
	return knex.schema.createTable(tableName, table => {
		table.increments('id').primary()
		table.string('title').notNullable()
		table.text('content').notNullable()
		table.string('hexColor').notNullable()
		table.date('date').defaultTo(Date.now())
	})
}

// Método que será executado quando houver um rollback da migration
exports.down = (knex) => {
	return knex.schema.dropTable(tableName)
}
