const db = require('../database/models');

const apiUsersModel = {
    /* Return all the information from the database */
    findAll: async function () {
        return await db.users.findAll({
            include: [{ association: "userCategory" }]
        })
    },


    /* Find a user by its ID */
    findByPk: async function (id) {
        return await db.users.findByPk(id,{
            include: [{ association: "userCategory" }]
        });
    },

}


module.exports = apiUsersModel;