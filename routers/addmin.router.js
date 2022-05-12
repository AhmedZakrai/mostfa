const route = require('express').Router()

const addminController=require('../controller/addmin.controller')

route.get('/',addminController.dashBord)



module.exports = route;
