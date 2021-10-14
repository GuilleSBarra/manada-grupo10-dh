let users = require('../database/users.json');
const fs = require("fs");
const path = require("path");
const bcrypt = require ("bcrypt")
const { validationResult } = require("express-validator")

let controller = {
     login: (req, res) => {
        res.render('./users/login.ejs')
    },
    
    register: (req, res) => {
        res.render('./users/register.ejs')
    },

    registerUser: (req, res) => {
        const resultValidation = validationResult(req)
        
        if (resultValidation.errors.length > 0) {
			return res.render('./users/register.ejs', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		} else {
        const id = users.length + 1;
        const file = req.file
        const { user, name, surname, category, password } = req.body
        const newUser = {
            id: id,
            user: user,
            name: name,
            surname: surname,
            image: `/img/users/${file.filename}`,
            category: "User",
            password: bcrypt.hashSync(password, 10)
        }
            users.push(newUser)

        fs.writeFileSync(path.join(__dirname, "../database/users.json"), JSON.stringify(users, null, 4), { encoding: 'utf-8' })

        res.render('./users/login.ejs', { user });
        }

    },



    detail:(req,res) => {
        const id = req.params.id;
        let user = users.find(item=>item.id == id);
        res.render("./users/user.ejs", { user })
    }
}

module.exports = controller