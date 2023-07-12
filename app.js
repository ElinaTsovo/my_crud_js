const express = require('express')
const app = express()

//VAMOS USAR O METODO GET para crir rotas

app.get('/', (request, response) =>{
    response.send('ola mundo')
})

app.get('/api/courses', (request, response) =>{
    response.send('estas na segunda rota!!')
})
.listen(3005, () => console.log('o servidor esta a correr na porta 3005'))