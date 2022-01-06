const db = require('../database/models');

const categoriesModel = {
    /* Return all the categories from the database */
    findAll: async function () {
        return await db.productcategories.findAll();
    },

    /* Find a category by its ID */
    findByPk: async function (id) {
        return await db.productcategories.findByPk(id);
    },
    
    /* Get the PK from a column name */
    getIdByField: async function (field, text) {
        let category = await db.productcategories.findOne({
            where: { [field]: text }
        })
        return await category.id;
    }
}

module.exports = categoriesModel;