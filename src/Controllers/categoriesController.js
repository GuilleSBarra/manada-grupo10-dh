const products = require('../database/products.json');
const fs = require("fs");
const path = require("path");

const controller = {
    detail: (req,res) => {
        let lastURLSegment = req.path.split('/');
        let id = lastURLSegment.length - 1;
        let productsByCategory = [];
        let product;

        if (lastURLSegment[id] == "jinete") {
            productsByCategory = products.filter(product=>product.category == "Jinete");
            product = products.find(product=>product.category == "Jinete");
        }
        if (lastURLSegment[id] == "equipo-accesorios") {
            productsByCategory = products.filter(product=>product.category == "Equipo y Accesorios");
            product = products.find(product=>product.category == "Equipo y Accesorios");
        }
        if (lastURLSegment[id] == "cuidados-caballo") {
            productsByCategory = products.filter(product=>product.category == "Cuidados del caballo");
            product = products.find(product=>product.category == "Cuidados del caballo");
        }
        if (lastURLSegment[id] == "veterinaria") {
            productsByCategory = products.filter(product=>product.category == "Veterinaria");
            product = products.find(product=>product.category == "Veterinaria");
        }

        res.render("./products/categories.ejs", { productsByCategory, product })
    }
}

module.exports = controller;