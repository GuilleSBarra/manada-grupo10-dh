const products = require('../database/products.json');

let controller = {
    admin: (req, res) => {
        res.render('./admin.ejs');
    },

    createProduct: (req, res) => {
        products.push({
            id:"" ,
            // VER COMO AGREGAR EL ID DE MANERA AUTOMÁTICA.
            name: req.body.newProductName,
            description: req.body.newProductDescription,
            image: req.body.newProductImage,
            category: req.body.category,
            size: req.body.size,
            Price: req.body.Price,
            keywords: req.body.keywords,
            inSale: req.body.inSale,
            discountPrice: req.body.discountPrice,
            discount: req.body.discount
        });

        // VER COMO REDIRIGIR AL DETALLE DLE PRODUCTO CARGADO
        res.redirect('/products');
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