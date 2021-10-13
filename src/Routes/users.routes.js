const express = require('express')
const validateUserAuth = require('../middlewares/userAuth')
const uploadUsers = require('../middlewares/multer-users')
const controller = require('../controllers/usersController')
const router = express.Router()




router.get("/registro", validateUserAuth, controller.register)
router.post("/registro", uploadUsers.single("image"), controller.registerUser)

router.get("/ingreso", validateUserAuth, controller.login)


module.exports = router