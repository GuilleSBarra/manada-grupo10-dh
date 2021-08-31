const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, './src/public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './src/views/index.html'));
});

// app.get('/sections', (req, res) => {
//   res.sendFile(path.join(__dirname, './src/views/sections.html'))
// })

// app.get('/categorias', (req, res) => {
//   res.sendFile(path.join(__dirname, './src/views/categories.html'))
// })

app.get("/registro", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/views/register.html"));
});

app.get("/ingreso", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/views/login.html"));
});

app.get("/carrito", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/views/cart.html"));
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});