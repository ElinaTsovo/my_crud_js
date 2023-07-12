
const mongoose = require('mongoose')

//criamos uma funcao 
async function connectionDB(){
    try{
await mongoose.connect('mongodb+srv://tsovita:elinatsovo@cluster0.bwlnzox.mongodb.net/genesis?retryWrites=true&w=majority')
console.log('DB is connetcted')
    }catch(error){
        console.log(error)

    }
}

//criar uma cama que vai lidar com a DB




module.exports = connectionDB