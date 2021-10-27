const fs = require('fs');
const path = require('path');

const categoriesModel = {
    /* Read the info from the database */
    getData: function () {
        return JSON.parse(fs.readFileSync(path.join(__dirname, "../database/categories.json"), 'utf-8'));
    },

    /* Return all the categories from the database */
    findAll: function () {
        return this.getData();
    }
}

module.exports = categoriesModel;