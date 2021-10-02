let products = require('../database/products.json');
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

        const file = req.file
        const { name, description, category, size, Price, keywords, inSale, discountPrice, discount } = req.body
        const newProduct = {
            id: uuidv4(),
            name: name,
            description: description,
            image: `/img/${file.filename}`,
            category: category,
            size: size,
            Price: Price,
            keywords: keywords,
            inSale: inSale,
            discountPrice: discountPrice,
            discount: discount
        }

        products.push(newProduct)

        fs.writeFileSync(path.join(__dirname, "../database/products.json"), JSON.stringify(products, null, 4), { encoding: 'utf-8' })

        res.render('./products/shop.ejs', { products });
    },

    editProducts: (req, res) => {
        res.render('./admin/editProducts.ejs', { products })
    },

    editForm: (req, res) => {
        const idProduct = req.params.idProduct;
        const product = products.find(product => product.id == idProduct);

        res.render('./admin/editProduct.ejs', { product })
    },

    update: (req, res) => {
        const idProduct = req.params.idProduct;
        console.log(idProduct)

        products.forEach(product => {
			if (product.id == idProduct){
                product.name = req.body.name,
                product.description = req.body.description,
                product.category = req.body.category,
                product.size = req.body.size,
                product.price = req.body.price,
                product.keywords = req.body.keywords,
                product.inSale = req.body.inSale,
                product.discountPrice = req.body.discountPrice,
                product.discount = req.body.discount
			}
		});

        fs.writeFileSync(path.join(__dirname, "../database/products.json"), JSON.stringify(products, null, 4), { encoding: 'utf-8' })
        
        res.redirect('/admin/edit-product/' + idProduct);
    },

    destroy: (req, res) => {
        products = products.filter(product => product.id != req.params.idProduct);

		fs.writeFileSync(path.join(__dirname, "../database/products.json"), JSON.stringify(products, null, 4), { encoding: 'utf-8' })

		res.render('./admin/editProducts.ejs', { products })
    },
}

module.exports = controller