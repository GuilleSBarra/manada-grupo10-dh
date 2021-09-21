const express = require('express');
const controller = require('../controllers/productsController');
const controllerAdmin = require('../Controllers/adminController')
const router = express.Router();


// Views

router.get("/", controller.shop);
router.get("/carrito", controller.carrito);

// Create products 

router.get("/create",controllerAdmin.admin)
router.post('/', controllerAdmin.createProduct)



module.exports = router;