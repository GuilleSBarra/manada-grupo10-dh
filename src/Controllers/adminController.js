const { validationResult } = require("express-validator");
const productsModel = require('../models/productsModel');
const usersModel = require('../models/usersModel');
const bcrypt = require("bcryptjs");


/***** ADMIN CONTROLLER *****/

let admin = {
    /* GET: Admin Panel */
    index: (req, res) => {
        const adminHeader = "Dashboard"
        return res.render('./admin/admin.ejs', { adminHeader });
    },
}


/***** PRODUCTS ADMIN CONTROLLER *****/

let products = {
    /* GET: Create Products Form */
    createProductsForm: (req, res) => {
        const adminHeader = "Productos"
        return res.render('./admin/createProducts.ejs', { adminHeader })
    },

    /* POST: Create new Products in the database */
    createProducts: (req, res) => {
        const resultValidation = validationResult(req);  
        const file = req.file;
        const adminHeader = "Productos"

        if (resultValidation.errors.length > 0) {
            return res.render('./admin/createProducts.ejs', {
                errors: resultValidation.mapped(),
                oldData: req.body,
                adminHeader
            });
        }
        
        // Take the information to add a new product
        let productToCreate = {
            ...req.body,
            image: `/img/products/${file.filename}`
        }
        
        productsModel.create(productToCreate);
        return res.render('./admin/createProducts.ejs', { adminHeader })
    },

    /* GET: Select Products to Update */
    editProducts: (req, res) => {
        const categories = productsModel.getCategoriesSelection();
        const products = productsModel.getProductsSelection(req.query.category);
        const adminHeader = "Productos";
        res.render('./admin/editProducts.ejs', { categories, products, adminHeader })
    },

    /* GET: Product Form */
    editForm: (req, res) => {
        const product = productsModel.findByPk(req.params.id);
        const adminHeader = "Productos";
        res.render('./admin/editProduct.ejs', { product, adminHeader })
    },

    /* POST: Update the product in the database */
    update: (req, res) => {
        const file = req.file;
        const id = req.params.id;
        const searchedProduct = productsModel.findByPk(id);

        if (file == undefined) {
            searchedProduct.image = searchedProduct.image;
        } else {
            searchedProduct.image = `/img/products/${file.filename}`;
        }

        // Take the information to update the product in the database
        let productToUpdate = {
            ...req.body,
            image: searchedProduct.image
        }
        
        productsModel.update(productToUpdate, id);
        res.redirect('/admin/edit-product/' + id);
    },

    /* Delete the product from the database. Call the view to Select Products to Update */
    destroy: (req, res) => {
        productsModel.delete(req.params.id);
        products.editProducts (req, res);
    },
}


/***** USERS ADMIN CONTROLLER *****/

let users = {
    /* GET: Create Users Form */
    createUsersForm: (req, res) => {
        const adminHeader = "Usuarios";
        return res.render('./admin/createUsers.ejs', { adminHeader })
    },
    
    /* POST: Create new Users in the database */
    createUsers: (req, res) => {
        const resultValidation = validationResult(req);  
        const file = req.file;
        const adminHeader = "Usuarios";

        if (resultValidation.errors.length > 0) {
            return res.render('./admin/createUsers.ejs', {
                errors: resultValidation.mapped(),
                oldData: req.body,
                adminHeader
            });
        }

        // Check if the email is already register in the Database
        let userExist = usersModel.findByField('email', req.body.email);
        if (userExist) {
            return res.render('./admin/createUsers.ejs', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body,
                adminHeader
            });
        }


        // Take the information to create the user
        let userToCreate = {
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
            image: `/img/users/${file.filename}`
        }

        usersModel.create(userToCreate);
        return res.render('./admin/createUsers.ejs', { adminHeader })
    },

    /* GET: Select Users to Update */
    editUsers: (req, res) => {
        const adminHeader = "Usuarios";
        const users = usersModel.findAll();
        const categories = [...new Set(users.map(user => user.category))];
        const usersByCategory = users.filter(user => 
            user.category == req.query.category || 
            user.name == req.query.name ||
            user.surname == req.query.surname);
        res.render('./admin/editUsers.ejs', { users: usersByCategory, categories, adminHeader })
    },

    /* GET: User Form */
    editForm: (req, res) => {
        const user = usersModel.findByPk(req.params.id);
        const adminHeader = "Usuarios";
        res.render('./admin/editUser.ejs', { user, adminHeader })
    },

    /* POST: Update the User in the database */
    update: (req, res) => {
        const file = req.file;
        const id = req.params.id;
        const searchedUser = usersModel.findByPk(id);

        if (file == undefined) {
            searchedUser.image = searchedUser.image;
        } else {
            searchedUser.image = `/img/users/${file.filename}`;
        }

        // Take the information to update the user in the database
        let userToUpdate = {
            ...req.body,
            image: searchedUser.image
        }
        
        usersModel.update(userToUpdate, id);
        res.redirect('/admin/edit-user/' + id);
    },

    /* Delete the user from the database. Call the view to Select Users to Update */
    destroy: (req, res) => {
        usersModel.delete(req.params.id);
        users.editUsers (req, res);
    },
}

module.exports = { products , users, admin }