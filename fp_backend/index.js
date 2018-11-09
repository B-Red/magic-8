const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const data = require('./data.json')
const port = 3001

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/answers', (req, res, next) => {
    res.send({ data: data })
})

app.get('/return', (req, res) => {
    let i = Math.floor(Math.random() * (data.length + 1))
    res.send({data: data[i].answer})
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))