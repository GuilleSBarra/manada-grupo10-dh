const express = require('express')
const router = express.Router()
const uploadProducts = require('../middlewares/multerProductsMiddleware')
const uploadUsers = require('../middlewares/multerUsersMiddleware')
const usersMiddleware = require('../middlewares/usersValidationsMiddleware')
const productsMiddleware = require('../middlewares/productsValidationsMiddleware')
const controller = require('../controllers/adminController')

/* Admin Panel */
router.get("/", controller.admin.index);

/********** PRODUCTS ADMINISTRATION **********/

/* Admin Panel: New Products */
router.get("/create-product", controller.products.createProductsForm);
router.post("/create-product", uploadProducts.single("image"), productsMiddleware, controller.products.createProducts)

/* Admin Panel: Select Products to Update */
router.get("/edit-product/", controller.products.editProducts);

/* Update Product */
router.get("/edit-product/:id", controller.products.editForm);
router.put("/edit-product/:id", uploadProducts.single("image"), controller.products.update);

/* Admin Panel: Delete Products */
router.delete("/delete/:id", controller.products.destroy);


/********** USERS ADMINISTRATION **********/

/* Admin Panel: New Users */
router.get("/create-user", controller.users.createUsersForm);
router.post("/create-user", uploadProducts.single("image"), usersMiddleware, controller.users.createUsers)

/* Admin Panel: Select Users to Update */
router.get("/edit-user/", controller.users.editUsers);

/* Update User */
router.get("/edit-user/:id", controller.users.editForm);
router.put("/edit-user/:id", uploadUsers.single("image"), controller.users.update);

/* Admin Panel: Delete USers */
router.delete("/delete-user/:id", controller.users.destroy);


module.exports = router