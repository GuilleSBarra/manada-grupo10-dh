const express = require('express');
const router = express.Router();

router.use('/', require('./main.routes'));
router.use('/', require('./users.routes'));
router.use('/', require('./products.routes'))
router.use('/', require('./admin.routes'));

module.exports = router;