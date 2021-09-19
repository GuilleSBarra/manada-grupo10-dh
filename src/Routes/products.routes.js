const express = require('express');
const controller = require('../controllers/productsController');
const controllerAdmin = require('../Controllers/adminController')
const router = express.Router();

router.get("/shop", controller.shop);
router.get("/carrito", controller.carrito);

router.get("/create",controllerAdmin.admin)

module.exports = router;