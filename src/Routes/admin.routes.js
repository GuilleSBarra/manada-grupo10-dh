const express = require('express')
const controller = require('../controllers/adminController')
const router = express.Router()

// router.get("/create", controller.admin);
// router.post("/", controller.createProduct);

router.get("/", controller.admin);
router.get("/edit/:idProduct", controller.adminEdit);
router.put("/edit/:idProduct", controller.editProduct);

module.exports = router