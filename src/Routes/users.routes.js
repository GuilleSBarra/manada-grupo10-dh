const express = require('express')
const validateUserAuth = require('../middlewares/userAuth')
const controller = require('../controllers/usersController')
const router = express.Router()

router.get("/registro", validateUserAuth, controller.register)
router.get("/ingreso", validateUserAuth, controller.login)

module.exports = router