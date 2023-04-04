const express = require('express');
const app = express();

app.get('/', function (req,res) {
    res.send('Hola Mundo');
});

app.get('/home', function (req,res) {
    res.send('Hola Mundo En Home');
});

app.get('*', function (req,res) {
    res.send('Pagina no encontrada');
});

app.listen(8080);