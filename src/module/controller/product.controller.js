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
    createProduct(req,res){
        const { id, name, price } = req.body;
        product.push({id,  name, price});
        
        res.json({
            success: true,
            data: product
        }).status(201)
    }
}

module.exports = productController;
