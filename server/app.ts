/// <reference path = "./_reference.ts"/>

import express = require('express');
import path = require('path');
var favicon = require('serve-favicon');
import logger = require('morgan');
import cookieParser = require('cookie-parser');

import bodyParser = require('body-parser');

// import objects namespace
import * as objects from './objects/customerror';
import CustomError = objects.CustomError;
var myerror = new CustomError();

// add mongoose
import mongoose = require('mongoose');

var routes = require('./routes/index');
//var users = require('./routes/users');
var articles = require('./routes/articles');

var app = express();

// connect to mongodb with mongoose

// local mongodb connection
//mongoose.connect('mongodb://localhost/comp2068-mongodemo');

mongoose.connect('mongodb://thomas:12345@ds061345.mongolab.com:61345/heroku_qnl2tjrh');

// check connection
var db: mongoose.Connection = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error: '));
db.once('open', function(callback) {
    console.log('Connected to mongoLab');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', routes);
//app.use('/users', users);
app.use('/articles', articles);


// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next: any) => {
    var error = new CustomError('Not Found');
    error.status = 404;
    next(error);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((error: CustomError, req: express.Request, res: express.Response, next: any) => {
        res.status(error.status || 500);
        res.render('error', {
            message: error.message,
            error: error
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((error: CustomError, req: express.Request, res: express.Response, next: any) =>{
    res.status(error.status || 500);
    res.render('error', {
        message: error.message,
        error: {}
    });
});


module.exports = app;
