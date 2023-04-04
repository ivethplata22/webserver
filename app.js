const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'hbs');

// Servir contenido estatico
app.use( express.static('public') );

// Se puede renderizar con el mismo html
// Sirve para reutilizar codigo de vistas facilmente
app.get('/', function (req,res) {
    res.render('home');
});

app.get('/generic', function (req,res) {
    res.sendFile( __dirname + '/public/generic.html');
});

app.get('/elements', function (req,res) {
    res.sendFile( __dirname + '/public/elements.html');
});

app.get('*', function (req,res) {
    res.sendFile( __dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Aplicacion corriendo en el puerto ${port}`);
});