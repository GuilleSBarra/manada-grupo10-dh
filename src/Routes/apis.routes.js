const express = require('express');
const router = express.Router();
const controllerUsersApi = require('../controllers/apiUsersContoller');
const controllerProducstApi = require('../controllers/apiProductsContoller');

/*** GET APIS PRODUCT ***/ 

router.use('/products', controllerProducstApi.allProducts);
router.use('/products', controllerProducstApi.detail)


/*** GET APIS USERS ***/
router.use('/users',controllerUsersApi.allUsers);
router.use('/users',controllerUsersApi.detail);


module.exports = router;