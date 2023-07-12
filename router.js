const express = require ('express')
const controllerProduct = require ('./controler')

//definindo a rota

const router = express.Router()

//para usar tem que disponibilizar ela no server

router.get('/products', controllerProduct.getProducts)
router.get('/products/:_id', controllerProduct.getProduct)
router.post('/products', controllerProduct.createProduct)
router.put('/products/:_id', controllerProduct.updateProduct)
router.delete('/products/:_id', controllerProduct.deleteProduct)

module.exports = router