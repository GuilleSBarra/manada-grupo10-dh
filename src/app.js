const express = require('express');
const session = require('express-session');
const cookies = require('cookie-parser');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
const notFound = require('./middlewares/notFound');

app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

app.use(session({
    secret: "Shhh, it's a secret",
    resave: false,
    saveUninitialized: false
}));

app.use(cookies());

/*Middleware to determine if a user is logged or not, in order to show different menus*/
app.use(userLoggedMiddleware);

app.use(express.static(path.join(__dirname, './public')));

/*POST Process*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/*PUT Process*/
app.use(methodOverride("_method"));
app.use(methodOverride('X-HTTP-Method-Override'))


/*Routes*/
app.use ('/', require('./routes/index.routes'));


/*Error: 404*/
app.use(notFound)

module.exports = app;