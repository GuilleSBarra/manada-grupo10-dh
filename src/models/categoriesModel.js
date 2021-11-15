const db = require('../database/models');
const fs = require('fs');
const path = require('path');

const categoriesModel = {
    /* Read the info from the database */
    getData: async function () {
        return await db.productcategories.findAll();
    },

    /* Return all the categories from the database */
    findAll: async function () {
        return await this.getData();
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