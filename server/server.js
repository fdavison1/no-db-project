require('dotenv').config()
const express = require('express')
const {PORT} = process.env
//controller

const app = express()
app.use(express.json())

//endpoints


//listening
app.listen(PORT, ()=>console.log(`${PORT} is on and ready to copy`))