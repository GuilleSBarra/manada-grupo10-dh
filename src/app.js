const express = require('express');
const path = require('path');
const app = express();
const methodOVerride = require('method-override');

app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));
/*app.use(express.static('./src/public'));*/

/*POST Process*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/*PUT Process*/
app.use(methodOVerride("_method"));

/*Routes*/
app.use ('/', require('./routes/index.routes'));

module.exports = app;