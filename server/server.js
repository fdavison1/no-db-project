//requirements
require('dotenv').config()
const express = require('express')
const {PORT} = process.env
const ctrl = require('./controller')

const app = express()
app.use(express.json())

//endpoints (4)
app.get('/api/collection', ctrl.getCards)
app.post('/api/collection', ctrl.newCard)
app.put('/api/collection/:id', ctrl.editCard)
app.delete('/api/collection/:id', ctrl.deleteCard)

//listening
app.listen(PORT, ()=>console.log(`${PORT} is on and ready to copy`))