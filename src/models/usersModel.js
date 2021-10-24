
const fs = require('fs');
const path = require('path');

const usersModel = {
    /* Read the info from the database */
    getData: function () {
        return JSON.parse(fs.readFileSync(path.join(__dirname, "../database/users.json"), 'utf-8'));
    },

    /* Post the new info in the database */
    postData: function (userData) {
        return fs.writeFileSync(path.join(__dirname, "../database/users.json"), JSON.stringify(userData, null, 4), { encoding: 'utf-8' });
    },

    /* Return all the information from the database */
    findAll: function () {
        return this.getData();
    },

    /* Create a new ID for new Users */
    generateId: function (){
        let users = this.findAll();
        let lastUser = users.pop();

        if (lastUser) {
            return lastUser.id + 1;
        } else {
            return 1;
        }
    },

    /* Find a user by its ID */
    findByPk: function (id) {
        let users = this.findAll();
        let userFound = users.find(user => user.id == id);
        return userFound;
    },

    /* Find an user by a particular filed */
    /* Example: field = 'email' / text = 'da.aramayo1990@gmail.com' */
    findByField: function (field, text) {
        let users = this.findAll();
        let userFound = users.find(user => user[field] === text);
        return userFound;
    },

    /* Save the new user in the database */
    create: function (userData) {
        let users = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        users.push(newUser);
        this.postData(users);
        return newUser;
    },

    /* Update the user in the database */
    update: function (userData, id) {
        let users = this.findAll();

        users.forEach(user => {
            if (user.id == id) {
                user.user = userData.user,
                user.name = userData.name,
                user.surname = userData.surname,
                user.email = userData.email,
                user.password = userData.password,
                user.category = userData.category,
                user.image = userData.image
            }
        })
        
        this.postData(users);
        return users;
    },

    /* Delete the user from the database */
    delete: function (id) {
        let users = this.findAll();
        let finalUsers = users.filter(user => user.id != id);
        this.postData(finalUsers);
        return true;
    }
}

module.exports = usersModel;