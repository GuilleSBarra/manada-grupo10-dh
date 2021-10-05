const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');

app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './public')));

/*PUT Process*/
app.use(methodOverride("_method"));
app.use(methodOverride('X-HTTP-Method-Override'))

/*POST Process*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/*Routes*/
app.use ('/', require('./routes/index.routes'));

module.exports = app;