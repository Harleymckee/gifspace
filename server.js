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

app.get('/giphy/:term', function(req, res) {


  request('http://api.giphy.com/v1/gifs/random?api_key=5xaOcLHMQRWQPesDyc8&tag=' + req.params.term, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})



});


var port = process.env.PORT || 4444;


app.listen(port, function() {
    console.log(((port + port) / 2) + '4' + ((port + port) / 2));
});
