const product = require('./Products')

//metodo pra criacao de dados na BD
const controllerProduct = {
    //criando o produto
    createProduct: async function (request, response){
        const { name, description, price} = request.body
        try {
            const productInfo = await product.create({
                name,
                description,
                price
            })

            return response.json(productInfo)
        } catch (erro) {
            return response.json(error)
        }
    },

    getProducts: async function(request, response){
        try{
            const productInfos = await product.find();
            return response.json(productInfos)
        }catch(error){
            return response.json(error)
        }
   
    },
    getProduct: async function(request, response){
        const {_id} = request.params;
        try{
            const productDatails = await product.findById({_id});
            return response.json(productDatails)
        }catch(error){
            return response.json(error)
        }
},

    updateProduct: async function (request, response){
        const {_id} = request.params;
        const{name, description, price} = request.body

        try {
            const productInfo = await product.findById({_id})
            if (!producInfo){
                return response.json({message: 'produto nao encontrado na database'})
            }

            await product.updateOne({_id},{
                name,
                description,
                price
            })
            return response.json({message: 'o seu produto foi aactualizado com sucesso'})
        } catch (error) {
            return response.json(error)
            
        }
    },

    deleteProduct: async function(request, response){
        const {_id} = request.params;

        try{
            await product.deleteOne({_id})
            return response.json({message: 'seu produto foi deletado com sucesso'})
        }catch(error){
            return response.json(error)
        }
    }

}

module.exports = controllerProduct