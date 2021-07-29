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

module.exports = connection
