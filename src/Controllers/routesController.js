const path = require('path');

let home = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'))};


let carrito = (req, res) => {
    res.sendFile(path.join(__dirname, "../views/products/cart.html"))};

  let shop = (req, res) => {
    res.sendFile(path.join(__dirname, "../views/products/shop.html"))};

  let register = (req, res) => {
    res.sendFile(path.join(__dirname, "../views/users/register.html"))};

  let login = (req, res) => {
    res.sendFile(path.join(__dirname, "../views/users/login.html"))};

module.exports = {home, carrito, shop, register, login}
