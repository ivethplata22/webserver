const express = require('express');
const app = express();
const port = 8080;

app.get('/', function (req,res) {
    res.send('Hola Mundo');
});

app.get('/home', function (req,res) {
    res.send('Hola Mundo En Home');
});

app.get('*', function (req,res) {
    res.send('Pagina no encontrada');
});

app.listen(port, () => {
    console.log(`Aplicacion corriendo en el puerto ${port}`);
});