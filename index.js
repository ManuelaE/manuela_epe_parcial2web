const express = require('express');
const hbs = require('express-handlebars');
const app = express();
const fs = require('fs');

app.use(express.static('public'));
app.engine('handlebars', hbs());
app.set('view engine','handlebars');

var visitasA = 0;
var visitasB = 0;
var visitasC = 0;

app.get('/paginaA', function(request, response) {
    console.log('jucionax1');
    response.render('main');

    visitasA += 1;
    console.log('paginaA: '+visitasA);

    fs.writeFileSync('visitas.txt', `PaginaA: ${visitasA} visitas!
 PaginaB: ${visitasB} visitas!
    PaginaC: ${visitasC} visitas!`, function(err){
        if(err) throw err;
        console.log('juncionax1000');
    });
});

app.get('/paginaB', function(request, response) {
    console.log('jucionax4');
    response.render('maindos');

    visitasB += 1;
    console.log('paginaB: '+visitasB);

    fs.writeFileSync('visitas.txt', `Pagina A: ${visitasA} visitas!
    PaginaB: ${visitasB} visitas!
    PaginaC: ${visitasC} visitas!`, function(err){
        if(err) throw err;
        console.log('juncionax1000');
    });
});

app.get('/paginaC', function(request, response) {
    console.log('jucionax5');
    response.render('maintres');

    visitasC += 1;
    console.log('paginaC: '+visitasC);

    fs.writeFileSync('visitas.txt',  `PaginaA: ${visitasA} visitas!
    PaginaB: ${visitasB} visitas!
    PaginaC: ${visitasC} visitas!`, function(err){
        if(err) throw err;
        console.log('juncionax1000');
    });
});

app.get('/', function(request,  response){

    response.send('juncionax3');
});

app.listen(5500);
