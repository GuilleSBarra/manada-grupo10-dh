const db = require('../database/models');

const usersCategoriesModel = {
    /* Return all the categories from the database */
    findAll: async function () {
        return await db.usercategories.findAll();
    },

    /* Find a category by its ID */
    findByPk: async function (id) {
        return await db.usercategories.findByPk(id);
    },
    
    /* Get the PK from a column name */
    getIdByField: async function (field, text) {
        let category = await db.usercategories.findOne({
            where: { [field]: text }
        })
        return await category.id;
    }
}

module.exports = usersCategoriesModel;