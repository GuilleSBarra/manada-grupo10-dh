const express = require('express');
const path = require('path');
const app = express();
let usersRoute = require('./src/Routes/users.routes');
let productsRoute = require('./src/Routes/products.routes');
let mainRoute = require('./src/Routes/main.routes')

app.use(express.static(path.join(__dirname, '/src/public')))

app.use ('/', mainRoute)
app.use ('/users', usersRoute)
app.use ('/products', productsRoute)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});