const product = [
    {
        id : 1,
        name : "apple"
    },{
        id : 2,
        name : "banana"
    },{
        id : 3,
        name : "mango"
    },{
        id : 4,
        name : "durian"
    }
]

const productController = {
    getProduct(req,res){
        res.json({
            success: true,
            data: product
        })
    },
    getProductById(req,res){
        const { id } = req.params;
        const found = product.find((product)=>product.id === +id)
        res.json({
            success: true,
            data: found
        })
    }
}

module.exports = productController;