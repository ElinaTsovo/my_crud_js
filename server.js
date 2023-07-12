//importando  o express
const express = require('express')
const mongooseBD = require('./database')
const router = require('./router')

//instanciando o express
const app = express()

//indicando o tipo de dado que a api vai usar
app.use(express.json())
app.use('/', router)

const port = 3005
mongooseBD()

app.listen(port,( )=>{
    console.log(`The server is running on http://localhost:${port}`)
})

