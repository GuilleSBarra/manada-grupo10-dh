let products = require('../database/products.json');
let users = require('../database/users.json');
const fs = require("fs");
const path = require("path");

let controller = {

    admin: (req, res) => {
        
        res.render('./admin/admin.ejs');
    },

    createProductsForm: (req, res) => {

        res.render('./admin/createProducts.ejs')
    },

    createProducts: (req, res) => {

        const id = products.length + 1;
        const file = req.file
        const { name, description, category, size, Price, keywords, inSale, discountPrice, discount } = req.body
        const newProduct = {
            id: id,
            name: name,
            description: description,
            image: `/img/${file.filename}`,
            category: category,
            size: size,
            Price: Price,
            keywords: keywords,
            inSale: inSale,
            discountPrice: discountPrice,
            discount: discount
        }

        products.push(newProduct)

        fs.writeFileSync(path.join(__dirname, "../database/products.json"), JSON.stringify(products, null, 4), { encoding: 'utf-8' })

        res.render('./products/shop.ejs', { products });
    },

    editProducts: (req, res) => {

        const categories = [...new Set(products.map(product => product.category))];
        const productsByCategory = products.filter(product => product.category == req.query.category);
        
        res.render('./admin/editProducts.ejs', { products: productsByCategory, categories })
    },

    editForm: (req, res) => {

        const idProduct = req.params.idProduct;
        const product = products.find(product => product.id == idProduct);

        res.render('./admin/editProduct.ejs', { product })
    },

    update: (req, res) => {
        const file = req.file;
        const idProduct = req.params.idProduct;
        let searchedProduct = products.find(product => product.id == idProduct);

        if (file == undefined) {
            searchedProduct.image = searchedProduct.image;
        } else {
            searchedProduct.image = `/img/${file.filename}`;
        }

        products.forEach(product => {
			if (product.id == idProduct){
                product.name = req.body.name,
                product.description = req.body.description,
                product.image = searchedProduct.image,
                product.category = req.body.category,
                product.size = req.body.size,
                product.price = req.body.price,
                product.keywords = req.body.keywords,
                product.inSale = req.body.inSale,
                product.discountPrice = req.body.discountPrice,
                product.discount = req.body.discount
			}
		});

        fs.writeFileSync(path.join(__dirname, "../database/products.json"), JSON.stringify(products, null, 4), { encoding: 'utf-8' })
        
        res.redirect('/admin/edit-product/' + idProduct);
    },

    destroy: (req, res) => {

        products = products.filter(product => product.id != req.params.idProduct);

		fs.writeFileSync(path.join(__dirname, "../database/products.json"), JSON.stringify(products, null, 4), { encoding: 'utf-8' })

        controller.editProducts (req, res);
    },


    editUsers: (req, res) => {

        const categories = [...new Set(users.map(user => user.category))];
        const usersByCategory = users.filter(user => user.category == req.query.category);
        
        res.render('./admin/editUsers.ejs', { user: usersByCategory, categories })
    },

    editUserForm: (req, res) => {

        const idUser = req.params.idUser;
        const user = users.find(user => user.id == idUser);

        res.render('./admin/editUser.ejs', { user })
    },

    updateUser: (req, res) => {
        const file = req.file;
        const idUser = req.params.idUser;
        let searchedUser = users.find(user => user.id == idUser);

        if (file == undefined) {
            searchedUser.image = searchedUser.image;
        } else {
            searchedUser.image = `/img/users/${file.filename}`;
        }

        users.forEach(user => {
			if (user.id == idUser){
                user.user = req.body.user,
                user.name = req.body.name,
                user.surname = req.body.surname,
                user.image = searchedUser.image,
                user.category = req.body.category
			}
		});

        fs.writeFileSync(path.join(__dirname, "../database/users.json"), JSON.stringify(users, null, 4), { encoding: 'utf-8' })
        
        res.redirect('/admin/edit-user/' + idUser);
    },

    destroyUser: (req, res) => {

        users = users.filter(user => user.id != req.params.idUser);

		fs.writeFileSync(path.join(__dirname, "../database/users.json"), JSON.stringify(users, null, 4), { encoding: 'utf-8' })

        controller.editUsers (req, res);
    },
}

module.exports = controller