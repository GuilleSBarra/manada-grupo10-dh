const express = require('express')
const router = express.Router()
const uploadUserAvatar = require('../middlewares/multerUsersMiddleware')
const usersMiddleware = require('../middlewares/usersValidationsMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')
const controller = require('../controllers/usersController')

/* Login Form */
router.get("/ingreso", guestMiddleware, controller.login)
router.post("/ingreso", controller.processLogin)

/* Register Form */
router.get("/registro", guestMiddleware, controller.register)
router.post("/registro", uploadUserAvatar.single("image"), usersMiddleware, controller.processRegister)

/* User Profile */
router.get("/mi-cuenta", authMiddleware, controller.profile)
router.get("/logout", controller.logout)


module.exports = router