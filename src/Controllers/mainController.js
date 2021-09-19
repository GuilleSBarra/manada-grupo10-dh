const categories = require('../database/categories.json');
const products = require('../database/products.json');

const controller = {
  home: (req, res) => {
    res.render('index.ejs', { products, categories })
  }
}

module.exports = controller;
