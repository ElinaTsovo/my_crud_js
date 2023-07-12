const mongoose = require('mongoose')

//criando um schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    }

}, {timestamps: true})

const Product = mongoose.model ('shoping', productSchema)

module.exports = Product