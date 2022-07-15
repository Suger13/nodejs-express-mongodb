const productDocument = require("../models/product.schema");

const productService = {
    create(payload) {
        return new productDocument(payload).save()
}
};

module.exports = productService;