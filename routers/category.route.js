const route=require('express').Router()

const categoryController=require('../controller/category.controller')

const multer = require("multer");


route.get('/',categoryController.getAllCategory)
//  create
route.get('/add',categoryController.addCategory)
route.post('/add',multer({dest:'images'}).none(),categoryController.addUpCategory)
// edit
route.get('/edit',categoryController.editCategory)
route.post('/edit',categoryController.editUpCategory)
// delete
route.get('/remove',categoryController.removeCategory)
route.post('/remove',categoryController.removeUpCategory)

module.exports=route


