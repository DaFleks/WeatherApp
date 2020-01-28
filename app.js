const express = require('express'),
    app = express(),
    HTTP_PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(HTTP_PORT, () => {
    console.log('WeatherApp on Express.js starting on port: ' + HTTP_PORT);
})