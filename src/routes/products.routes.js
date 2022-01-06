const express = require('express');
const controllerProducts = require('../controllers/productsController');
const router = express.Router();

// Views
router.get("/", controllerProducts.shop);
router.get("/carrito", controllerProducts.carrito);


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', controllerProducts.detail); 


module.exports = router;