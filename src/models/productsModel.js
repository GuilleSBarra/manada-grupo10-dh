const fs = require('fs');
const path = require('path');

const productsModel = {
    /* Read the info from the database */
    getData: function () {
        return JSON.parse(fs.readFileSync(path.join(__dirname, "../databaseJSON/products.json"), 'utf-8'));
    },

    /* Post the new info in the database */
    postData: function (productData) {
        return fs.writeFileSync(path.join(__dirname, "../databaseJSON/products.json"), JSON.stringify(productData, null, 4), { encoding: 'utf-8' });
    },

    /* Return all the information from the database */
    findAll: function () {
        return this.getData();
    },

    /* Create a new ID for new Products */
    generateId: function (){
        let products = this.findAll();
        let lastProduct = products.pop();

        if (lastProduct) {
            return lastProduct.id + 1;
        } else {
            return 1;
        }
    },

    /* Find a product by its ID */
    findByPk: function (id) {
        let products = this.findAll();
        let productFound = products.find(product => product.id == id);
        return productFound;
    },

    /* Find a product by a particular filed */
    /* Example: field = 'category' / text = 'Jinete' */
    findByField: function (field, text) {
        let products = this.findAll();
        let productFound = products.find(product => product[field] === text);
        return productFound;
    },

    /* Find all products by a particular filed */
    /* Example: field = 'category' / text = 'Jinete' */
    findAllByField: function (field, text) {
        let products = this.findAll();
        let productsFound = products.filter(product => product[field] === text);
        return productsFound;
    },

    /* Select the correct category depending on the URL */
    selectCorrectCategory: function (urlCategory) {
        let products = [];

        if (urlCategory == "jinete") {
            products = this.findAllByField('category', 'Jinete');
        }
        if (urlCategory == "equipo-accesorios") {
            products = this.findAllByField('category', 'Equipo y Accesorios');
        }
        if (urlCategory == "cuidados-caballo") {
            products = this.findAllByField('category', 'Cuidados del caballo');
        }
        if (urlCategory == "veterinaria") {
            products = this.findAllByField('category', 'Veterinaria');
        }

        return products;
    },

    /* Save the new product in the database */
    create: function (productData) {
        let products = this.findAll();
        let newProduct = {
            id: this.generateId(),
            ...productData
        }
        products.push(newProduct);
        this.postData(products);
        return newProduct;
    },

    /* Get the categories to use the filter in Products to Update */
    getCategoriesSelection: function () {
        let products = productsModel.findAll();
        let categories = [...new Set(products.map(product => product.category))];
        return categories;
    },

    /* Get the Products by Category */
    getProductsSelection: function (category) {
        let products = productsModel.findAll();
        let productsByCategory = products.filter(product => product.category == category);
        return productsByCategory;
    },
    
    /* Update the product in the database */
    update: function (productData, id) {
        let products = this.findAll();

        products.forEach(product => {
            if (product.id == id) {
                product.name = productData.name,
                product.description = productData.description,
                product.image = productData.image,
                product.category = productData.category,
                product.size = productData.size,
                product.price = productData.price,
                product.keywords = productData.keywords,
                product.inSale = productData.inSale,
                product.discountPrice = productData.discountPrice,
                product.discount = productData.discount
            }
        })

        this.postData(products);
        return products;
    },

    /* Delete the product from the database */
    delete: function (id) {
        let products = this.findAll();
        let finalProducts = products.filter(product => product.id != id);
        this.postData(finalProducts);
        return true;
    }
}

module.exports = productsModel;