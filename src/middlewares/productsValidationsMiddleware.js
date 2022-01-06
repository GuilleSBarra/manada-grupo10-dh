/* Middleware for express-validator library that it's incorporated for server-side data validation */

const path = require("path")
const { check } = require('express-validator');

const validateProductsAuth = [
  check('name')
    .notEmpty().withMessage('Debes completar el Nombre del producto').bail()
    .isLength({ min: 3 }).withMessage('El nombre debe ser más largo'),

  check('description')
    .notEmpty().withMessage('Debes completar la Descripción del producto').bail()
    .isLength({ min: 10 }).withMessage('La descripción debe contener al menos 50 caracteres'),

  check('price')
    .notEmpty().withMessage('Debes completar el Precio').bail(),

  check('image')
    .custom((value, { req }) => {
      let file = req.file;
      let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.JPG', '.JPEG', '.PNG', '.GIF'];

      if (!file) {
        throw new Error('Tienes que subir una imagen');

      } else {
        let fileExtension = path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)) {
          throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
        }
      }
      
      return true;
    })

]

module.exports = validateProductsAuth;