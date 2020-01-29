const express = require('express'),
    request = require('request'),
    fs = require('fs'),
    path = require('path'),
    app = express(),
    HTTP_PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(express.static('public'));

var options = {
    method: 'GET',
    url: 'https://dark-sky.p.rapidapi.com/43.694817,-79.440577',
    qs: {
        lang: 'en',
        units: 'auto'
    },
    headers: {
        'x-rapidapi-host': 'dark-sky.p.rapidapi.com',
        'x-rapidapi-key': '28a34b0137msh63dffbbbe659a27p131b4ejsn49e401c90d66'
    }
};

var weather = [];

app.get('/', (req, res) => {
    // request(options, (err, request, body) => {
    //     if (!err && request.statusCode == 200) {
    //         weather = JSON.parse(body);
    //         res.render('index', {
    //             weather: weather
    //         });
    //     } else {
    //         console.log(err);
    //     }
    // })

    res.render('index');
})

app.listen(HTTP_PORT, () => {
    console.log('WeatherApp on Express.js starting on port: ' + HTTP_PORT);;
})