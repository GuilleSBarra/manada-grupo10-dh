var DataTypes = require("sequelize").DataTypes;
var _productcart = require("./productcart");
var _productcategories = require("./productcategories");
var _products = require("./products");
var _shoppingcarts = require("./shoppingcarts");
var _sizes = require("./sizes");
var _status = require("./status");
var _usercategories = require("./usercategories");
var _users = require("./users");

function initModels(sequelize) {
  var productcart = _productcart(sequelize, DataTypes);
  var productcategories = _productcategories(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var shoppingcarts = _shoppingcarts(sequelize, DataTypes);
  var sizes = _sizes(sequelize, DataTypes);
  var status = _status(sequelize, DataTypes);
  var usercategories = _usercategories(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  products.belongsTo(productcategories, { as: "productCategory", foreignKey: "idProductsCategory" });
  productcategories.hasMany(products, { as: "product", foreignKey: "idProductsCategory" });
  productcart.belongsTo(products, { as: "idProduct_product", foreignKey: "idProduct" });
  products.hasMany(productcart, { as: "productcarts", foreignKey: "idProduct" });
  productcart.belongsTo(shoppingcarts, { as: "idShoppingCart_shoppingcart", foreignKey: "idShoppingCart" });
  shoppingcarts.hasMany(productcart, { as: "productcarts", foreignKey: "idShoppingCart" });
  products.belongsTo(sizes, { as: "productSize", foreignKey: "idSize" });
  sizes.hasMany(products, { as: "product", foreignKey: "idSize" });
  shoppingcarts.belongsTo(status, { as: "idStatus_status", foreignKey: "idStatus" });
  status.hasMany(shoppingcarts, { as: "shoppingcarts", foreignKey: "idStatus" });
  users.belongsTo(usercategories, { as: "userCategory", foreignKey: "idUserCategory" });
  usercategories.hasMany(users, { as: "user", foreignKey: "idUserCategory" });
  shoppingcarts.belongsTo(users, { as: "idUser_user", foreignKey: "idUser" });
  users.hasMany(shoppingcarts, { as: "shoppingcarts", foreignKey: "idUser" });

  return {
    productcart,
    productcategories,
    products,
    shoppingcarts,
    sizes,
    status,
    usercategories,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
