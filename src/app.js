const express = require('express');
const path = require('path');
const app = express();

/*app.set('views', path.join(__dirname, "./src/views"));*/
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/src/public')));
/*app.use(express.static('./src/public'));*/

app.use ('/', require('./routes/index.routes'));

module.exports = app;