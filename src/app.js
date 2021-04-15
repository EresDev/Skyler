const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geocode = require('./api-consumers/geocode');
const forecast = require('./api-consumers/forecast');

require('dotenv').config();
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
        title: 'Skyler',
        name: 'EresDev'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'EresDev'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'EresDev',
        helpText: 'This is some helpful text.'
    });
});

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        res.send({
            'error': 'You must provide an address'
        });
        return;
    }

    geocode(req.query.address, (error, {latitude, longitude, placename} = {}) => {
        if (error) {
            res.send({
                'error': error
            });
            return;
        }

        forecast(latitude, longitude, (error, data) => {
            if (error) {
                res.send({
                    'error': error
                });
                return;
            }
            console.log(placename);
            console.log(data);

            res.send({
                forecast: data,
                location: placename,
                address: req.query.address
            });
        });
    });

    // console.log(req.query.address);
    // res.send({
    //     forecast: 'This is the forecast',
    //     location: 'Philadelphia',
    //     address: req.query.address
    // });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        'errorMsg': 'Help article not found.',
        'name': 'EresDev',
        'title': '404'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        'errorMsg': 'Page not found.',
        'name': 'EresDev',
        'title': '404'
    });
});


app.listen(3000, () => {
    console.log('Express server listening at port 3000');
});