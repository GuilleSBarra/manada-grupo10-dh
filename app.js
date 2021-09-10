const express = require('express');
const path = require('path');
const app = express();
const mainRoute = require('./src/routes/main.routes')
const usersRoute = require('./src/routes/users.routes');
const productsRoute = require('./src/routes/products.routes');

app.set('views', path.join(__dirname, "./src/views"));

/*app.use(express.static(path.join(__dirname, '/src/public')))*/
app.use(express.static('./src/public'));

app.use ('/', mainRoute)
app.use ('/users', usersRoute)
app.use ('/products', productsRoute)

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log(`Servidor corriendo en puerto ${port}`);
// });

module.exports = app