/* Middleware for Error 404 - Not Found */

function notFound (req, res, next) {
    res.status(404).render('404-page');
    next();
}

module.exports = notFound;