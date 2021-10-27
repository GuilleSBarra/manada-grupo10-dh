const productsModel = require('../models/productsModel');
const categoriesModel = require('../models/categoriesModel');

const controller = {
  home: (req, res) => {
    const products = productsModel.findAll();
    const categories = categoriesModel.findAll();
    res.render('index.ejs', { products, categories })
  }
}

module.exports = controller;
