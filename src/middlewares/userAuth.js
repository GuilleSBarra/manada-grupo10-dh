const { check } = require('express-validator');

const validateUserAuth = [
    check('user')
    .notEmpty().withMessage('Debes completar el Usuario').bail()
    .isLength({ min: 5 }).withMessage('El nombre de usuario debe ser más largo'),

    check('name')
    .notEmpty().withMessage('Debes completar el nombre').bail()
    .isLength({ min: 3 }).withMessage('El nombre debe ser más largo'),

    check('surname')
    .notEmpty().withMessage('Debes completar el Apellido').bail()
    .isLength({ min: 3 }).withMessage('El Apellido debe ser más largo'),

    check('email')
    .notEmpty().withMessage('Debes completar el Email').bail()
    .isEmail().withMessage('Debes completar un Email válido'),

    check('pass')
    .notEmpty().withMessage('Debes completar la Contraseña').bail()
    .isLength({ min: 8 }).withMessage('La Contraseña debe ser más larga')
]

module.exports = validateUserAuth;