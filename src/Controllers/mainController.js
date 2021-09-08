const categories = require('../database/categories.json');
const salesProducts = require('../database/productsSale.json');

let home = (req, res) => {
  res.render('index.ejs', { 
    salesProducts: salesProducts,
    categories: categories });
};

module.exports = { home }
