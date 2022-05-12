const route = require("express").Router();
const productController=require("../controller/product.controller")

route.get('/edit',productController.editProduct)
