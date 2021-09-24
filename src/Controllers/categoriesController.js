const products = require('../database/products.json');
const fs = require("fs");
const path = require("path");

const controller = {
    detail: (req,res) => {
        const getLastSegment = thePath => thePath.substring(thePath.lastIndexOf('/') + 1)
        const id = req.params.id;
        let product = products.find(item=>item.id == id);
        res.render("./products/product.ejs", { product })}
}

module.exports = controller;