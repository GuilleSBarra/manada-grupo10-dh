const db = require('../database/models');

const usersModel = {
    /* Return all the information from the database */
    findAll: async function () {
        return await db.users.findAll({
            include: [{ association: "userCategory" }]
        })
    },

    /* Create a new ID for new Users */
    generateId: async function (){
        let users = await this.findAll();
        let lastUser = await users.pop();

        if (lastUser) {
            return lastUser.id + 1;
        } else {
            return 1;
        }
    },

    /* Find a user by its ID */
    findByPk: async function (id) {
        return await db.users.findByPk(id,{
            include: [{ association: "userCategory" }]
        });
    },

    /* Find an user by a particular filed */
    /* Example: field = 'email' / text = 'da.aramayo1990@gmail.com' */
    findByField: async function (field, text) {
        return await db.users.findOne({
            include: [{ association: "userCategory" }],
            where: { [field]: text }
        })
    },

    /* Find all users by a particular filed */
    /* Example: field = 'email' / text = 'da.aramayo1990@gmail.com' */
    findAllByField: async function (field, text) {
        return await db.users.findAll({
            include: [{ association: "userCategory" }],
            where: { [field]: text }
        })
    },

    /* Save the new user in the database */
    create: async function (newUser) {
        await db.users.create(newUser)
    },

    /* Update the user in the database */
    update: async function (userData, id) {
        await db.users.update({
                user: userData.user,
                name: userData.name,
                surname: userData.surname,
                email: userData.email,
                image: userData.image,
                password: userData.password,
                idUserCategory: userData.idUserCategory,
        },{
            where: { id: id }
        })
    },

    /* Delete the user from the database */
    delete: async function (id) {
        await db.users.destroy({
            where: { id: id }
        })
    }
}

module.exports = usersModel;