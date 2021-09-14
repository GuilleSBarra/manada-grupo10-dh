const products = require('../database/products.json');

let controller = {
    admin: (req, res) => {
        res.render('./admin.ejs');
    },

    createProduct: (req, res) => {
        products.push({
            image: req.body.newProductImage,
            description: req.body.newProductDescription,
            actualPrice: req.body.newProductPrice
        });

        res.redirect('/admin');
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