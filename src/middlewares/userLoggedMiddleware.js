/* Middleware to determine if a user is logged or not, in order to show different menus */
/* The Middleware is also use to save the user in the Cookies */

const usersModel = require('../models/usersModel');

function userLoggedMiddleware (req, res, next) {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userCookieEmail;
    let userFromCookie = usersModel.findByField('email', emailInCookie);

    if (userFromCookie) {
        req.session.userLogged = userFromCookie;
    }

    if (req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();
}

module.exports = userLoggedMiddleware;