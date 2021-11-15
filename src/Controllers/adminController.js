const { validationResult } = require("express-validator");
const { productsModel } = require('../models');
const { categoriesModel } = require('../models');
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
    createProductsForm: async function (req, res) {
        const adminHeader = "Productos"
        return res.render('./admin/createProducts.ejs', { adminHeader })
    },

    /* POST: Create new Products in the database */
    createProducts: async function (req, res) {
        const resultValidation = validationResult(req);  
        const adminHeader = "Productos"
        
        if (resultValidation.errors.length > 0) {
            return res.render('./admin/createProducts.ejs', {
                errors: resultValidation.mapped(),
                oldData: req.body,
                adminHeader
            });
        }
        
        try {
            const file = req.file;
            const idCategory = await categoriesModel.getIdByField('name', req.body.category);
            
            // Take the information to add a new product
            let productToCreate = {
                ...req.body,
                image: `/img/products/${file.filename}`,
                idProductsCategory: idCategory,
                idSize: ''
            }

            await productsModel.create(productToCreate);
            return res.render('./admin/createProducts.ejs', { adminHeader })
        
        } catch (error) {
            res.status(404).render('404-page.ejs');
        }
    },

    /* GET: Select Products to Update */
    editProducts: async function (req, res) {
        try {
            if (req.query.category) {
                const categories = await categoriesModel.findAll();
                const idCategory = await categoriesModel.getIdByField('name', req.query.category);
                const products = await productsModel.findAllByField('idProductsCategory', idCategory);
                const adminHeader = "Productos";
                res.render('./admin/editProducts.ejs', { categories, products, adminHeader })
            } else {
                const categories = await categoriesModel.findAll();
                const products = await productsModel.findAll();
                const adminHeader = "Productos";
                res.render('./admin/editProducts.ejs', { categories, products, adminHeader })
            }
        } catch (error) {
            res.status(404).render('404-page.ejs');
        }
    },

    /* GET: Product Form */
    editForm: async function (req, res) {
        try {
            const product = await productsModel.findByPk(req.params.id);
            const adminHeader = "Productos";
            res.render('./admin/editProduct.ejs', { product, adminHeader })
        } catch (error) {
            res.status(404).render('404-page.ejs');
        }
    },

    /* POST: Update the product in the database */
    update: async function (req, res) {
        try {
            const file = req.file;
            const id = req.params.id;
            const idCategory = await categoriesModel.getIdByField('name', req.body.category);
            const searchedProduct = await productsModel.findByPk(id);
    
            if (file == undefined) {
                searchedProduct.image = searchedProduct.image;
            } else {
                searchedProduct.image = `/img/products/${file.filename}`;
            }
    
            // Take the information to update the product in the database
            let productToUpdate = {
                ...req.body,
                idProductsCategory: idCategory,
                image: searchedProduct.image
            }
            
            await productsModel.update(productToUpdate, id);
            return res.redirect('/admin/edit-product/' + id);

        } catch (error) {
            res.status(404).render('404-page.ejs');
        }
    },

    /* Delete the product from the database. Call the view to Select Products to Update */
    destroy: async function (req, res) {
        productsModel.delete(req.params.id);
        products.editProducts (req, res);
    },
}


/***** USERS ADMIN CONTROLLER *****/

let users = {
    /* GET: Create Users Form */
    createUsersForm: async function (req, res) {
        const adminHeader = "Usuarios";
        return res.render('./admin/createUsers.ejs', { adminHeader })
    },
    
    /* POST: Create new Users in the database */
    createUsers: async function (req, res) {
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
    editUsers: async function (req, res) {
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
    editForm: async function (req, res) {
        const user = usersModel.findByPk(req.params.id);
        const adminHeader = "Usuarios";
        res.render('./admin/editUser.ejs', { user, adminHeader })
    },

    /* POST: Update the User in the database */
    update: async function (req, res) {
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
    destroy: async function (req, res) {
        usersModel.delete(req.params.id);
        users.editUsers (req, res);
    },
}

module.exports = { products , users, admin }