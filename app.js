const express = require('express');
const app = express();
app.get('/clientes', (req, res) => {
    res.sendFile(__dirname + '/clientes.html');
});
app.get('/productos', (req, res) => {
    res.sendFile(__dirname + '/productos.html');
});
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`La aplicación está corriendo en el puerto ${PORT}`);
});
