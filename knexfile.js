const path = require('path')

module.exports = {
  client: 'mssql',
  connection: {
    host : 'localhost',
    user : 'sa',
    password : 'CTHM@projeto2021',
    database : 'concept',
    port: 1433,
    options: {
      trustedConnection: true
    }
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds')
  },
  useNullAsDefault: true
};
