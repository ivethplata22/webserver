const express = require('express');
const hbs = require('hbs');

const app = express();
const port = 8080;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use( express.static('public') );

app.get('/', function (req,res) {
    res.render('home', {
        nombre: 'Karen',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', function (req,res) {
    res.render('generic', {
        nombre: 'Karen',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', function (req,res) {
    res.render('elements', {
        nombre: 'Karen',
        titulo: 'Curso de Node'
    });
});

app.get('*', function (req,res) {
    res.sendFile( __dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Aplicacion corriendo en el puerto ${port}`);
});