const apiUsersModel = require('../models/apiUsersModel');
// const { validationResult } = require("express-validator")
// const bcrypt = require("bcryptjs")

let controller = {

    /* GET: All Users API */
    allUsers: async function (req, res) {
        try {
            const users = await apiUsersModel.findAll();
            res.status(200).json({
                count: users.length,
                Users: users.map(item => ({
                    id: item.id,
                   email: item.email,
                    name: item.name,
                    surname: item.surname,
                    detail: `http://localhost:3000/api/users/${item.id}`
                })),
                status: 200
                })
        } catch (error) {
            res.status(404).render('404-page.ejs');
        }
    },
    
 /* GET: User by ID API */
    detail: async function (req, res) {
        try {
            const user = await apiUsersModel.findByPk(req.params.id);
            res.status(200).json(
                { 
                User: user.map(item => ({
                    id: item.id,
                    email: item.email,
                    name: item.name,
                    surname: item.surname,
                    image: `http://localhost:3000/${item.image}`
                })),
                status: 200
                });
        } catch (error) {
            res.status(404).render('404-page.ejs');
        }
    }
    
}

module.exports = controller