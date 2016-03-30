'use strict';

const fractal    = require('../basic/fractal');
const express    = require('express');
const fs         = require('fs');
const Handlebars = require('handlebars');
const app        = express();

// ----------------------------------------------------------------------------

// homepage

app.get('/', function (req, res) {

    const data = {
        pageTitle: 'Homepage',
        users: getUsersFromDB() // fake db query call
    };

    fractal.components.render('./views/index.hbs', data).then(function(html){
        res.send(html);
    });
});

// login page

app.get('/login', function (req, res) {
    const layout   = fs.readFileSync('./views/layout.hbs', 'utf8');
    const template = Handlebars.compile(layout);
    fractal.components.render('@form').then(function(componentHTML){
        const html = template({
            pageTitle: 'Login',
            pageBody: componentHTML
        });
        res.send(html);
    });
});

// ----------------------------------------------------------------------------

app.use(express.static('../../public'));

fractal.load().then(function(){
    app.listen(5000, function () {
        console.log('Example app listening on port 5000!');
    });
});

function getUsersFromDB(){
    return [
        {
            name: 'Bob',
            bio: 'This is Bob\'s bio'
        },
        {
            name: 'Fred',
            bio: 'This is Fred\'s bio'
        }
    ];
}
