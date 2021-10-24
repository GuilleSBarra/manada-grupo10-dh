/** Middleware that verifies if anyone is in sessions to block him/her to enter in Register or Login pages */

function guestMiddleware (req, res, next) {
    if (req.session.userLogged) {
        return res.redirect('/users/mi-cuenta');
    }
    next();
}

module.exports = guestMiddleware;