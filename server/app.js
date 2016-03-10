/// <reference path = "./_reference.ts"/>
"use strict";
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// import objects namespace
var objects = require('./objects/customerror');
var CustomError = objects.CustomError;
var myerror = new CustomError();
// add mongoose
var mongoose = require('mongoose');
var routes = require('./routes/index');
var users = require('./routes/users');
var articles = require('./routes/articles');
var app = express();
// connect to mongodb with mongoose
// local mongodb connection
//mongoose.connect('mongodb://localhost/comp2068-mongodemo');
mongoose.connect('mongodb://anoop:anoop1234@ds011419.mlab.com:11419/lab5-comp2068');
// check connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error: '));
db.once('open', function (callback) {
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
app.use('/users', users);
app.use('/articles', articles);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var error = new CustomError('Not Found');
    error.status = 404;
    next(error);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (error, req, res, next) {
        res.status(error.status || 500);
        res.render('error', {
            message: error.message,
            error: error
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (error, req, res, next) {
    res.status(error.status || 500);
    res.render('error', {
        message: error.message,
        error: {}
    });
});
module.exports = app;

//# sourceMappingURL=app.js.map
