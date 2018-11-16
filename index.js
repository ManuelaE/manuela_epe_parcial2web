const express = require('express');
const hbs = require('express-handlebars');
const app = express();
const fs = require('fs');

app.use(express.static('public'));
app.engine('handlebars', hbs());
app.set('view engine','handlebars');

app.get('/paginaA', function(request, response) {
    console.log('jucionax1');
    response.send('juncionax2');
});

app.get('/', function(request,  response){

    response.send('juncionax3');
});

app.listen(5500);
