var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
var http = require('http').Server(app);
var request = require('request');



app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname + '/client')));



app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.render('index.html');
});

var sec = require('./config/secrets.js');


app.get('/giphy/:term', function(req, res) {

request(sec.url + req.params.term, function (error, response, body) {

    res.send(body);

})



});


var port = process.env.PORT || 4444;


app.listen(port, function() {
    console.log(((port + port) / 2) + '4' + ((port + port) / 2));
});
