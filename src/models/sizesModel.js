const db = require('../database/models');

const sizesModel = {
    /* Return all the sizes from the database */
    findAll: async function () {
        return await db.sizes.findAll();
    },

    /* Find a category by its ID */
    findByPk: async function (id) {
        return await db.sizes.findByPk(id);
    },
    
    /* Get the PK from a column name */
    getIdByField: async function (field, text) {
        let size = await db.sizes.findOne({
            where: { [field]: text }
        })
        return await size.id;
    }
}

module.exports = sizesModel;