const path = require('path');

let carrito = (req, res) => {
    res.sendFile(path.join(__dirname, "../views/products/cart.html"))
};

let shop = (req, res) => {
    res.sendFile(path.join(__dirname, "../views/products/shop.html"))
};

module.exports = { carrito, shop }