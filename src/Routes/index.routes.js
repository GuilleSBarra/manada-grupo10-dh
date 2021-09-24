const express = require('express');
const router = express.Router();

router.use('/', require('./main.routes'));
router.use('/users', require('./users.routes'));
router.use('/products', require('./products.routes'))
router.use('/category', require('./products.routes'))
router.use('/admin', require('./admin.routes'));

module.exports = router;