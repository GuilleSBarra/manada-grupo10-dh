const { productsModel } = require('../models');

/* Check the Category of the URL. Ex: /categories/cuidados-caballo */
/* Depending on the category of the URL, the model return the products on the selected category */
const controller = {
    detail: async function (req, res) {
        try {
            const url = req.path.split('/')[1];
            const products = await productsModel.selectCorrectCategory(url);
            res.render("./products/categories.ejs", { products })
        } catch (error) {
            res.status(404).render('404-page.ejs');
        }
    }
}

module.exports = controller;