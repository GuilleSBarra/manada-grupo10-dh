const express = require('express')
const controller = require('../Controllers/routesController')
const router = express.Router()

router.get("/shop", controller.shop)
  
router.get("/carrito", controller.carrito)
  

module.exports = router