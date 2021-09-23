const products = require('../database/products.json');
const fs = require("fs");
const path = require("path");
const multer = require('multer')
const { v4: uuidv4 } = require('uuid');

//MULTER 
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

// CONTROLER
let controller = {
    admin: (req, res) => {
        res.render('admin.ejs');
    },

    createForm: (req, res) => {
        res.render('./admin/createProducts.ejs')
    },

    createProduct: (req, res) => {

        const archivo = req.file
        const {name,description,category,size,Price,keywords,inSale,discountPrice,discount} = req.body 
        const newProduct = {
            id: uuidv4() ,
            name: name,
            description: description,
            image: `./img/${archivo.filename}`,
            category: category,
            size: size,
            Price: Price,
            keywords: keywords,
            inSale: inSale,
            discountPrice: discountPrice,
            discount: discount
        }
        fs.writeFileSync(path.join(__dirname, "../Database/products.json"),JSON.stringify(newProducto,null,4),{encoding: 'utf-8'})
        
        res.redirect('./products/shop.ejs', {
            products: products });
    },

    adminEdit: (req, res) => {
        let idProduct = req.params.idProduct;
        let product = products[idProduct];

        res.render('./edit.ejs', { 
            product: product })
    },

    editProduct: (req, res) => {
        let idProduct = req.params.idProduct;
    
        products.forEach(product => {
            if (idProduct == product.id){
                product.image = req.body.editProductImage;
                product.description = req.body.editProductDescription;
                product.actualPrice = req.body.editProductPrice;
            }
        })

        res.render('.edit.ejs');
    }
}

module.exports = controller