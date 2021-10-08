var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var config = require('./config.js');
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));


app.listen(config.port,function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("UserStory App : Listening on port 3000")
    }
});
