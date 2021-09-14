const express = require('express')
const controller = require('../controllers/usersController')
const router = express.Router()

router.get("/registro", controller.register)
router.get("/ingreso", controller.login)

module.exports = router