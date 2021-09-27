const products = require('../database/products.json');
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');

let controller = {
    admin: (req, res) => {
        res.render('./admin/admin.ejs');
    },

    createForm: (req, res) => {
        res.render('./admin/createProducts.ejs')
    },

    create: (req, res) => {

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

    edit: (req, res) => {
        let idProduct = req.params.idProduct;
        let product = products[idProduct];

        res.render('./admin/edit.ejs', { 
            product: product })
    },

    update: (req, res) => {
        let idProduct = req.params.idProduct;
    
        products.forEach(product => {
            if (idProduct == product.id){
                product.image = req.body.editProductImage;
                product.description = req.body.editProductDescription;
                product.actualPrice = req.body.editProductPrice;
            }
        })

        res.render('./admin/edit.ejs');
    }
}

module.exports = controller