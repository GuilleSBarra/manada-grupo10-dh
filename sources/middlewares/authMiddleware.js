/** Middleware that verifies if anyone is in sessions to block him/her to enter in My Account page before to Logged Into */

function authMiddleware (req, res, next) {
    if (!req.session.userLogged) {
        return res.redirect('/users/ingreso');
    }
    next();
}

module.exports = authMiddleware;