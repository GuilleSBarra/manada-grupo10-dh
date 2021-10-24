
// 2. Buscar a un usuario que se quiere loguear por su email

// 4. Editar la información de un usuario


const fs = require('fs');
const path = require('path');
const users = require('../database/users.json');

const usersModel = {
    fileName: path.join(__dirname, "../database/users.json"),

    generateId: function (){
        let users = this.findAll();
        let lastUser = users.pop();

        if (lastUser) {
            return lastUser.id + 1;
        } else {
            return 1;
        }
    },

    getData: function () {
        return JSON.parse(fs.readFileSync(path.join(__dirname, "../database/users.json"), 'utf-8'));
    },

    findAll: function () {
        return this.getData();
    },

    // 3. Buscar a un usuario por su ID
    findByPk: function (id) {
        let users = this.findAll();
        let userFound = users.find(user => user.id == id);
        return userFound;
    },

    // Buscar a un usuario por algún campo de la Entidad
    // Ejemplo: field = 'email' / text = 'da.aramayo1990@gmail.com'
    findByField: function (field, text) {
        let users = this.findAll();
        let userFound = users.find(user => user[field] === text);
        return userFound;
    },

    // Guardar al usuario en la DB
    create: function (userData) {
        let users = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        users.push(newUser);
        fs.writeFileSync(path.join(__dirname, "../database/users.json"), JSON.stringify(users, null, 4), { encoding: 'utf-8' });
        return newUser;
    },

    // Eliminar a un usuario de la DB
    delete: function (id) {
        let users = this.findAll();
        let finalUsers = users.filter(user => user.id != id);
        fs.writeFileSync(path.join(__dirname, "../database/users.json"), JSON.stringify(finalUsers, null, 4), { encoding: 'utf-8' })
        return true;
    }
}

module.exports = usersModel;