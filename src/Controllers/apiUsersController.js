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
                Users: users,
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
                User: {
                    id: user.id,
                    user: user.user,
                    name: user.name,
                    surname: user.surname,
                    email: user.email,
                    image: user.image},
                status: 200
                });
        } catch (error) {
            res.status(404).render('404-page.ejs');
        }
    }
    
}

module.exports = controller