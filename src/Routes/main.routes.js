const express = require('express')
const router = express.Router()
const controller = require('../Controllers/routesController')

router.get('/', controller.home);


module.exports = router