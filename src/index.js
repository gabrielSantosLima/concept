const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use('/notes', routes)
app.use(cors())
app.use(express.json())

app.listen(3000)
