const path = require('path');

let register = (req, res) => {
    res.sendFile(path.join(__dirname, "../views/users/register.html"))
};

let login = (req, res) => {
    res.sendFile(path.join(__dirname, "../views/users/login.html"))
};

module.exports = { register, login }