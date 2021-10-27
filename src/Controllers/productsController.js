const productsModel = require('../models/productsModel');

const controller = {
    carrito: (req, res) => {
        res.render('./products/cart.ejs')
    },

    shop: (req, res) => {
        const products = productsModel.findAll();
        res.render('./products/shop.ejs', { products })
    },
    
    detail:(req,res) => {
        const product = productsModel.findByPk(req.params.id);
        res.render("./products/product.ejs", { product })}
}

module.exports = controller;