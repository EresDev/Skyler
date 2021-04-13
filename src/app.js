const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

const staticContentPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('views', viewsPath);
app.set('view engine', 'hbs');
app.use(express.static(staticContentPath));
hbs.registerPartials(partialsPath);

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
        name: 'Eresdev'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Eresdev'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Eresdev',
        helpText: 'This is some helpful text.'
    });
});

app.get('/weather', (req, res) => {
    res.send('Weather');
});

app.listen(3000, () => {
    console.log('Express server listening at port 3000');
});