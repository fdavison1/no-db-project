require('dotenv').config()
const express = require('express')
const {PORT} = process.env
//controller
const ctrl = require('./controller')

const app = express()
app.use(express.json())

//endpoints
app.get('/api/collection', ctrl.getCards)
app.get('/api/collection/:id', ctrl.getCard)


//listening
app.listen(PORT, ()=>console.log(`${PORT} is on and ready to copy`))