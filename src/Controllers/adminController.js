const { validationResult } = require("express-validator");
const { productsModel } = require('../models');
const { categoriesModel } = require('../models');
const { sizesModel } = require('../models');
const { usersModel } = require('../models');
const { usersCategoriesModel } = require('../models');
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
            // Take the file, generate a new id, find the Category and the Size id
            const file = req.file;
            const id = await productsModel.generateId();
            const idCategory = await categoriesModel.getIdByField('name', req.body.category);
            const idSize = await sizesModel.getIdByField('name', req.body.size);
            
            // Take the information to add a new product
            let productToCreate = {
                ...req.body,
                id: id,
                image: `/img/products/${file.filename}`,
                idProductsCategory: idCategory,
                idSize: idSize,
                discountPrice: null,
                discount: null
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
        try {
            await productsModel.delete(req.params.id);
            return products.editProducts (req, res);
        } catch (error){
            res.status(404).render('404-page.ejs');
        }
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
        const adminHeader = "Usuarios";
        const file = req.file;

        if (resultValidation.errors.length > 0) {
            return res.render('./admin/createUsers.ejs', {
                errors: resultValidation.mapped(),
                oldData: req.body,
                adminHeader
            });
        }

        try {
            // Check if the email is already register in the Database
            let userExist = await usersModel.findByField('email', req.body.email);
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

            const id = await usersModel.generateId();
            const idCategory = await usersCategoriesModel.getIdByField('name', req.body.category);

            // Take the information to create the user
            let userToCreate = {
                ...req.body,
                id: id,
                password: bcrypt.hashSync(req.body.password, 10),
                image: `/img/users/${file.filename}`,
                idUserCategory: idCategory
            }

            await usersModel.create(userToCreate);
            return res.render('./admin/createUsers.ejs', { adminHeader })

        } catch (error) {
            //res.status(404).render('404-page.ejs');
            res.send(error);
        }

    },

    /* GET: Select Users to Update */
    editUsers: async function (req, res) {
        try {
            if (req.query.category) {
                const categories = await usersCategoriesModel.findAll();
                const idCategory = await usersCategoriesModel.getIdByField('name', req.query.category);
                const users = await usersModel.findAllByField('idUserCategory', idCategory);
                const adminHeader = "Usuarios";
                res.render('./admin/editUsers.ejs', { categories, users, adminHeader })
            } else {
                const categories = await usersCategoriesModel.findAll();
                const users = await usersModel.findAll();
                const adminHeader = "Usuarios";
                res.render('./admin/editUsers.ejs', { categories, users, adminHeader })
            }
        } catch (error) {
            res.status(404).render('404-page.ejs');
        }
    },

    /* GET: User Form */
    editForm: async function (req, res) {
        try {
            const user = await usersModel.findByPk(req.params.id);
            const adminHeader = "Usuarios";
            res.render('./admin/editUser.ejs', { user, adminHeader })
        } catch (error) {
            res.status(404).render('404-page.ejs');
        }
    },

    /* POST: Update the User in the database */
    update: async function (req, res) {
        try {
            const file = req.file;
            const id = req.params.id;
            const idCategory = await usersCategoriesModel.getIdByField('name', req.body.category);
            const searchedUser = await usersModel.findByPk(id);
    
            if (file == undefined) {
                searchedUser.image = searchedUser.image;
            } else {
                searchedUser.image = `/img/users/${file.filename}`;
            }
    
            // Take the information to update the user in the database
            let userToUpdate = {
                ...req.body,
                idUserCategory: idCategory,
                image: searchedUser.image
            }
            
            await usersModel.update(userToUpdate, id);
            res.redirect('/admin/edit-user/' + id);

        } catch (error) {
            res.status(404).render('404-page.ejs');
        }
    },

    /* Delete the user from the database. Call the view to Select Users to Update */
    destroy: async function (req, res) {
        try {
            await usersModel.delete(req.params.id);
            return users.editUsers (req, res);
        } catch (error){
            res.status(404).render('404-page.ejs');
        }
    },
}

module.exports = { products , users, admin }