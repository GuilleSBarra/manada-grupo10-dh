const productsModel = require('../models/productsModel');
const usersModel = require('../models/usersModel');
const bcrypt = require("bcryptjs")


/***** ADMIN CONTROLLER *****/

let admin = {
    /* GET: Admin Panel */
    index: (req, res) => {
        return res.render('./admin/admin.ejs');
    },
}


/***** PRODUCTS ADMIN CONTROLLER *****/

let products = {
    /* GET: Create Products Form */
    createProductsForm: (req, res) => {
        return res.render('./admin/createProducts.ejs')
    },

    /* POST: Create new Products in the database */
    createProducts: (req, res) => {
        const file = req.file
        
        // Take the information to add a new product
        let productToCreate = {
            ...req.body,
            image: `/img/products/${file.filename}`
        }
        
        productsModel.create(productToCreate);
        return res.render('./admin/createProducts.ejs')
    },

    /* GET: Select Products to Update */
    editProducts: (req, res) => {
        const categories = productsModel.getCategoriesSelection();
        const products = productsModel.getProductsSelection(req.query.category);
        res.render('./admin/editProducts.ejs', { categories, products })
    },

    /* GET: Product Form */
    editForm: (req, res) => {
        const product = productsModel.findByPk(req.params.id);
        res.render('./admin/editProduct.ejs', { product })
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
        return res.render('./admin/createUsers.ejs')
    },

    /* POST: Create new Users in the database */
    createUsers: (req, res) => {  
        const file = req.file;

        // Check if the email is already register in the Database
        let userExist = usersModel.findByField('email', req.body.email);
        if (userExist) {
            return res.render('./admin/createUsers.ejs', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body
            });
        }


        // Take the information to create the user
        let userToCreate = {
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
            image: `/img/users/${file.filename}`
        }

        usersModel.create(userToCreate);
        return res.render('./admin/createUsers.ejs')
    },

    /* GET: Select Users to Update */
    editUsers: (req, res) => {
        const users = usersModel.findAll();
        const categories = [...new Set(users.map(user => user.category))];
        const usersByCategory = users.filter(user => user.category == req.query.category);
        res.render('./admin/editUsers.ejs', { users: usersByCategory, categories })
    },

    /* GET: User Form */
    editForm: (req, res) => {
        const user = usersModel.findByPk(req.params.id);
        res.render('./admin/editUser.ejs', { user })
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