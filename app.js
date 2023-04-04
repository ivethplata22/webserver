const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'hbs');

app.use( express.static('public') );

// Mandamos como argumentos este objeto
app.get('/', function (req,res) {
    res.render('home', {
        nombre: 'Karen',
        titulo: 'Curso de Node'
    });
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