const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/weather', (req, res) => {
    res.send('Weather');
});

app.listen(3000, () => {
    console.log('Express server listening at port 3000');
});