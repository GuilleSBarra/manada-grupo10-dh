const db = require('../database/models');

const apiProductsModel = {
    /* Return all the information from the database */
    findAll: async function () {
        return await db.products.findAll({
            include: [
                { association: "productCategory"},
                { association: "productSize"}]
        })
    },


    /* Find a user by its ID */
    findByPk: async function (id) {
        return await db.products.findByPk(id,{
            include: [
                { association: "productCategory" },
                { association: "productSize"}]
        });
    },

}


module.exports = apiProductsModel;