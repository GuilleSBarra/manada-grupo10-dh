const products = require('../database/products.json');

let carrito = (req, res) => {
    res.render('./products/cart.ejs');
};

let shop = (req, res) => {
    res.render('./products/shop.ejs', { products: products });
};

module.exports = { carrito, shop }