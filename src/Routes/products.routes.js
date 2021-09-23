const express = require('express');
const controllerProducts = require('../controllers/productsController');
const controllerAdmin = require('../controllers/adminController')
const router = express.Router();
const multer = require('multer')

//  MULTER
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../public/img"));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix =
        Date.now() + "-" + Math.round(Math.random() * 1e9) + file.originalname;
      cb(null, file.fieldname + "-" + uniqueSuffix);
    },
  });
  
  const upload = multer({ storage: storage });

// Views

router.get("/", controllerProducts.shop);
router.get("/carrito", controllerProducts.carrito);


// Create products 

router.get("/create",controllerAdmin.createForm)
router.post('/',upload.single("image"), controllerAdmin.createProduct)

router.get('/:id', controllerProducts.detail)

module.exports = router;