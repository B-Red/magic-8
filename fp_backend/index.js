const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const data = require('./data.json')
const port = 3001

const app = express()

app.use(bodyParser.json())
app.use(cors())



app.listen(port, () => console.log(`Example app listening on port ${port}!`))