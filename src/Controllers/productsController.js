const products = require('../database/products.json');
const fs = require("fs");
const path = require("path");

const controller = {
    carrito: (req, res) => {
        res.render('./products/cart.ejs')
    },

    shop: (req, res) => {
        res.render('./products/shop.ejs', {
            products: products })
    },
    
    detail:(req,res) => {
        const id = req.params.id;
        let product = products.find(item=>item.id == id);
        res.render("./products/product.ejs", { product })}
}

module.exports = controller;