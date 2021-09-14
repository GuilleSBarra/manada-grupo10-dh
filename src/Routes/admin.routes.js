const express = require('express')
const controller = require('../controllers/adminController')
const router = express.Router()

router.get("/admin", controller.admin);
router.post("/admin", controller.createProduct);

router.get("/admin/edit/:idProduct", controller.adminEdit);
router.put("/admin/edit/:idProduct", controller.editProduct);

module.exports = router