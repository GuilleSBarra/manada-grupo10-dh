const express = require('express')
const controller = require('../controllers/adminController')
const router = express.Router()
const path = require("path")
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


router.get("/", controller.admin);

router.get("/create-product", controller.createForm);
router.post("/create-product", upload.single("image"), controller.create)

router.get("/edit-product/", controller.editProducts);
router.get("/edit-product/:idProduct", controller.editForm);
router.put("/edit-product/:idProduct", controller.update);

router.delete("/delete/:idProduct", controller.destroy);

module.exports = router