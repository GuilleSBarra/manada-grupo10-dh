const db = require('../database/models');

const productsModel = {
    /* Return all the information from the database */
    findAll: async function () {
        return await db.products.findAll({
            include: [
                { association: "productCategory" },
                { association: "productSize"}]
        });
    },

    /* Create a new ID for new Products */
    generateId: async function (){
        let products = await this.findAll();
        let lastProduct = await products.pop();

        if (lastProduct) {
            return await lastProduct.id + 1;
        } else {
            return 1;
        }
    },

    /* Find a product by its ID */
    findByPk: async function (id) {
        return await db.products.findByPk(id,{
            include: [{ association: "productCategory" }]
        });
    },

    /* Find a product by a particular filed */
    /* Example: field = 'category' / text = 'Jinete' */
    findByField: async function (field, text) {
        let productFound = await db.products.findOne({
            include: [{ association: "productCategory" }],
            where: { [field]: text }
        })
        return await productFound;
    },

    /* Find all products by a particular filed */
    /* Example: field = 'category' / text = 'Jinete' */
    findAllByField: async function (field, text) {
        let productsFound = await db.products.findAll({
            include: [{ association: "productCategory" }],
            where: { [field]: text }
        })
        return await productsFound;
    },

    /* Select the correct category depending on the URL */
    selectCorrectCategory: async function (urlCategory) {
        let products = [];

        if (urlCategory == "jinete") {
            products = await this.findAllByField('idProductsCategory', 1);
        }
        if (urlCategory == "equipo-accesorios") {
            products = await this.findAllByField('idProductsCategory', 2);
        }
        if (urlCategory == "cuidados-caballo") {
            products = await this.findAllByField('idProductsCategory', 3);
        }
        if (urlCategory == "veterinaria") {
            products = await this.findAllByField('idProductsCategory', 4);
        }

        return await products;
    },

    /* Save the new product in the database */
    create: async function (newProduct) {
        await db.products.create(newProduct)
    },

    /* Get the categories to use the filter in Products to Update */
    getCategoriesSelection: async function () {
        let products = productsModel.findAll();
        let categories = [...new Set(products.map(product => product.category))];
        return categories;
    },

    /* Get the Products by Category */
    getProductsSelection: async function (category) {
        let products = productsModel.findAll();
        let productsByCategory = products.filter(product => product.category == category);
        return productsByCategory;
    },
    
    /* Update the product in the database */
    update: async function (productData, id) {
        await db.products.update({
            name: productData.name,
            description: productData.description,
            image: productData.image,
            idProductsCategory: productData.idProductsCategory,
            size: productData.size,
            price: productData.price,
            inSale: productData.inSale,
            discountPrice: productData.discountPrice,
            discount: productData.discount
        },{
            where: { id: id }
        })
    },

    /* Delete the product from the database */
    delete: async function (id) {
        await db.products.destroy({
            where: { id: id }
        })
    }
}

module.exports = productsModel;