const categories = require('../database/categories.json');
const salesProducts = require('../database/productsSale.json');

const controller = {
  home:(req, res) => {res.render('index.ejs', { 
    salesProducts: salesProducts,
    categories: categories })
}
}

module.exports = controller
