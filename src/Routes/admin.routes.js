const express = require('express')
const router = express.Router()
const upload = require('../middlewares/multer')
const controller = require('../controllers/adminController')

router.get("/", controller.admin);

router.get("/create-product", controller.createForm);
router.post("/create-product", upload.single("image"), controller.create)

router.get("/edit-product/", controller.editProducts);
router.get("/edit-product/:idProduct", controller.editForm);
router.put("/edit-product/:idProduct", upload.single("image"), controller.update);

router.delete("/delete/:idProduct", controller.destroy);

module.exports = router