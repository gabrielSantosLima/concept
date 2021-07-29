const knex = require('knex')

const connection = knex.knex({
	client : 'mssql',
	connection : {
		host : 'localhost',
		user : 'sa',
		password : 'CTHM@projeto2021',
		database : 'concept',
		port : 1433,
		options : {
			trustedConnection : true
		}
	},
	useNullAsDefault : true
})

/* Exportando objeto de conexão com o banco de dados. 
   Ver em https://knexjs.org/#Builder os métodos disponíveis para o CRUD.
   Ex: knex('Nome da tabela').select(...).where(...) 
*/ 
module.exports = connection
