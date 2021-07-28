const express = require('express')
const cors = require('cors')

const app = express()

app.get('/', (req, resp)=> {
    return resp.json({ hello: 'world' })
})

app.use(cors())
app.use(express.json())
app.listen(3000)