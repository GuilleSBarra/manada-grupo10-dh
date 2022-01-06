const express = require('express')
const router = express.Router()
const controller = require('../controllers/categoriesController')

router.get('/jinete', controller.detail)
router.get('/equipo-accesorios', controller.detail)
router.get('/cuidados-caballo', controller.detail)
router.get('/veterinaria', controller.detail)

module.exports = router