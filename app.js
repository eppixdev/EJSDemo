var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('home');
})

app.get('/fallinlovewith/:thing', function(req, res) {
    var thing = req.params.thing;
    res.render('love', {thingVar: thing});
})

app.get('/posts', function(req, res) {
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "Post 2", author: "Steve"},
        {title: "Post 3", author: "Staci"}
    ]
    
    res.render('posts', {posts: posts});
})

// tell express to start server
app.listen(3000, function() {
    console.log('Success');
})