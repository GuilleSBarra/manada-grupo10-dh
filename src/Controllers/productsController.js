const products = require('../database/products.json');

const controller = {
    carrito: (req, res) => {
        res.render('./products/cart.ejs')
    },

    shop: (req, res) => {
        res.render('./products/shop.ejs', {
            products: products })
    }
}

module.exports = controller;