const express = require('express')
const router = express.Router()
const uploadProducts = require('../middlewares/multer-products')
const uploadUsers = require('../middlewares/multer-users')
const controller = require('../controllers/adminController')

router.get("/", controller.admin);

router.get("/create-product", controller.createProductsForm);
router.post("/create-product", uploadProducts.single("image"), controller.createProducts)

router.get("/edit-product/", controller.editProducts);
router.get("/edit-product/:idProduct", controller.editForm);
router.put("/edit-product/:idProduct", uploadProducts.single("image"), controller.update);

router.delete("/delete/:idProduct", controller.destroy);




router.get("/edit-user/", controller.editUsers);
router.get("/edit-user/:idUser", controller.editUserForm);
router.put("/edit-user/:idUser", uploadUsers.single("image"), controller.updateUser);

router.delete("/delete-user/:idUser", controller.destroyUser);

module.exports = router