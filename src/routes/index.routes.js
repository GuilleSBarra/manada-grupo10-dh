const express = require('express');
const router = express.Router();

router.use('/', require('./main.routes'));
router.use('/users', require('./users.routes'));
router.use('/products', require('./products.routes'))
router.use('/category', require('./categories.routes'))
router.use('/admin', require('./admin.routes'));
router.use('/api', require('./apis.routes'));

module.exports = router;