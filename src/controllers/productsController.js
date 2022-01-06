const { productsModel } = require('../models');

const controller = {
    carrito: (req, res) => {
        res.render('./products/cart.ejs')
    },

    shop: async function (req, res) {
        try {
            const products = await productsModel.findAll();
            res.render('./products/shop.ejs', { products })
        } catch (error) {
            res.status(404).render('404-page.ejs');
        }
    },
    
    detail: async function (req, res) {
        try {
            const product = await productsModel.findByPk(req.params.id);
            res.render("./products/product.ejs", { product })
        } catch (error) {
            res.status(404).render('404-page.ejs');
        }
    }
}

module.exports = controller;