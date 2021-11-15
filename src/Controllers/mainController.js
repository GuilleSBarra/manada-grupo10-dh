const { productsModel } = require('../models');
const { categoriesModel } = require('../models');

const controller = {
  home: async function (req, res) {
    try {
      const products = await productsModel.findAll();
      const categories = await categoriesModel.findAll();
      res.render('index.ejs', { products, categories })
    } catch (error) {
        res.status(404).render('404-page.ejs');
    }
  }
}

module.exports = controller;
