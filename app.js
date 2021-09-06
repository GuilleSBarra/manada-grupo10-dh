const express = require('express');
const path = require('path');
const app = express();
let usersRoute = require('./src/Routes/users.routes');
let productsRoute = require('./src/Routes/products.routes');
let mainRoute = require('./src/Routes/main.routes')

app.use(express.static(path.join(__dirname, '/src/public')))



app.use ('/users', usersRoute)
app.use ('/products', productsRoute)
app.use ('/', mainRoute)

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '/src/views/index.html'));
// });

// app.get("/registro", (req, res) => {
//   res.sendFile(path.join(__dirname, "/src/views/register.html"));
// });

// app.get("/ingreso", (req, res) => {
//   res.sendFile(path.join(__dirname, "/src/views/login.html"));
// });

// app.get("/shop", (req, res) => {
//   res.sendFile(path.join(__dirname, "/src/views/shop.html"));
// });

// app.get("/carrito", (req, res) => {
//   res.sendFile(path.join(__dirname, "/src/views/cart.html"));
// });


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});