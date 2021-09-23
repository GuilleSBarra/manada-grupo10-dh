const products = require('../database/products.json');
const fs = require("fs");
const path = require("path");
// const { v4: uuidv4 } = require('uuid');
// const multer = require('multer')


// //MULTER 
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, path.join(__dirname, "../public/img"));
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix =
//         Date.now() + "-" + Math.round(Math.random() * 1e9) + file.originalname;
//       cb(null, file.fieldname + "-" + uniqueSuffix);
//     },
//   });
  
//   const upload = multer({ storage: storage });

// CONTROLLER
const controller = {
    carrito: (req, res) => {
        res.render('./products/cart.ejs')
    },

    shop: (req, res) => {
        res.render('./products/shop.ejs', {
            products: products })
    },
    detail:(req,res) => {
        const id = req.params.id;
        let product = products.find(item=>item.id == id);
        res.render("./products/product.ejs", { product })}
}

module.exports = controller;