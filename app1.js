//importar o express
const express = require('express')
const mongoose = require('mongoose')
//instanciar express
const app1 = express()

//DEFININDO A FORMA DE LER JSON
app1.use(
    express.urlencoded({
        extend: true,
    }),
)

app1.use(express.json())
//criando rotas

app1.get('/', (req, res) =>{
    res.json({message:'seja bem vindo'})
})

mongoose.conect('')
.then(() =>{
   console.log('contectamoos a mongoDB!') 
})

.listen(3004, () => console.log('Servidor corendo na porta 3005'))
