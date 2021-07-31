const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(routes)
app.use(cors())
app.use(express.json())
app.listen(process.env.PORT || 3000)
