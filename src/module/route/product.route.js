const express = require('express');
const route = express.Router();
const productController = require('../controller/product.controller');

route.get('/', productController.getProduct);
route.get('/:id', productController.getProductById);
route.post('/', productController.createProduct);

module.exports = route;