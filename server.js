var express = require('express');
var path = require('path'); 
var fs = require('fs');
var app = express();
var http = require('http').Server(app);



app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname + '/client')));



function home (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.render('index.html');
};

app.get('/', home);



var port = process.env.PORT || 4444; 


app.listen(port, function() {
    console.log(((port + port) / 2) + '4' + ((port + port) / 2));
});