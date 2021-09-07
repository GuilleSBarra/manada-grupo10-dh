let register = (req, res) => {
    res.render('./users/register.ejs');
};

let login = (req, res) => {
    res.render('./users/login.ejs');
};

module.exports = { register, login }