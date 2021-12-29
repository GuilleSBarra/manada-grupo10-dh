const apiProductsModel = require('../models/apiProductsModel');
const productcategories = require('../database/models/productcategories')
const controller = {

    // allProducts: async function (req, res) {
    //     try {
    //         const products = await apiProductsModel.findAll();
    //         res.starus(200).json({ count: products.length,
    //            products: products,
    //            status: 200
    //         })  
    //     } catch (error) {
    //         res.status(404).render('404-page.ejs');
    //     }
    // },

    allProducts: async function (req, res) {
        try {
            const products = await apiProductsModel.findAll();
            res.status(200).json({
                count: products.length,
                // countByCategory:
                products: products.map(item => ({
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    category: item.idProductsCategory,
                    size: item.idSize,   
                    detail: `http://localhost:3000/api/products/${item.id}`
                })), 
                status: 200
                })
        } catch (error) {
            res.status(404).render('404-page.ejs');
        }
    },
    
    detail: async function (req, res) {
        try {
            const product = await apiProductsModel.findByPk(req.params.id);
            res.status(200).json(
                {   product: product,
                    status: 200
                });
        } catch (error) {
            res.status(404).render('404-page.ejs');
        }
    }
}

module.exports = controller;