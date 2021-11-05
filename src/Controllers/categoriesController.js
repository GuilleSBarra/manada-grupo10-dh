const { productsModel } = require('../models');

/* Check the Category of the URL. Ex: /categories/cuidados-caballo */
/* Depending on the category of the URL, the model return the products on the selected category */
const controller = {
    detail: (req,res) => {
        const url = req.path.split('/')[1];
        const products = productsModel.selectCorrectCategory(url);
        
        res.render("./products/categories.ejs", { products })
    }
}

module.exports = controller;