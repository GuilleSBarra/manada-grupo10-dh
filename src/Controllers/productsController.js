let carrito = (req, res) => {
    res.render('./products/cart.ejs');
};

let shop = (req, res) => {
    res.render('./products/shop.ejs');
};

module.exports = { carrito, shop }