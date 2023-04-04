const express = require('express');
const app = express();
const port = 8080;

// Servir contenido estatico
app.use( express.static('public') );

// Se puede crear contenido estatico para rutas en especifico

app.get('/', function (req,res) {
    res.send('Hola Mundo');
});

app.get('/home', function (req,res) {
    res.send('Hola Mundo En Home');
});

app.get('*', function (req,res) {
    res.sendFile( __dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Aplicacion corriendo en el puerto ${port}`);
});