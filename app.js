var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.render('home.ejs');
})

// tell express to start server
app.listen(3000, function() {
    console.log('Success');
})