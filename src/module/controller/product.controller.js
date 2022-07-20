const humps = require('humps')
const ProductService = require('../services/product.service')

const product = [
    {
        id : 1,
        name : "apple",
        price: 50
    },{
        id : 2,
        name : "banana",
        price: 40
    },{
        id : 3,
        name : "mango",
        price: 35
    },{
        id : 4,
        name : "durian",
        price: 60
    }
]

//Hello
const productController = {
    getProduct(req,res){
        const price = req.query.price || 0
        const found = product.filter((product) => product.price >= price)
        res.json({
            success: true,
            data: found
        }).status(200)
    },
    getProductById(req,res){
        const { id } = req.params;
        const found = product.find((product)=>product.id === +id)
        res.json({
            success: true,
            data: found
        }).status(200)
    },
    async createProduct(req,res){
        const { name, quantity, quality, exp } = req.body;

        res.json({
            success: true,
            data: await ProductService.create({ name, quantity, quality, exp })
        }).status(201)
    }
}

module.exports = productController;