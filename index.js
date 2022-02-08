const express = require('express')
const bodyParser = require('body-parser')
const _ = require('lodash')
const { json } = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.get('/api/hello', async (req, res) => {

    const list = JSON.stringify(process.env)

    res.send(list)
})

app.get('/api/merhaba', (req, res) => {

    res.send('Merhaba')
})

app.post('/api/name', (req, res) => {

    const body = _.pick(req.body, ['firstName','lastName'])
    console.log(body)
    res.send('Hello '+body.firstName+' '+body.lastName)
})

app.listen(8080, () => {
    console.log('app server is running')
})