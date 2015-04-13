var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var ejs = require('ejs');

var mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/personal', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(cookieParser());
// Use the passport package in our application
app.use(passport.initialize());
app.use(session({secret:'askjdhaskdjh',
                 resave:true,
                 saveUninitialized:true}));
app.use(express.static(path.join(__dirname, 'public')));

function parseUserId(req,res,next){
  req.userId=req.params.id;
  console.log('id '+req.user_id);
  next();
}
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/:id/me', parseUserId, require('./routes/me'));
app.use('/:id/projects', parseUserId, require('./routes/projects'));
app.use('/:id/skills', parseUserId, require('./routes/skills'));
app.use('/:id/curriculum', parseUserId, require('./routes/curriculum'));
app.use('/:id/oauth2', require('./routes/oauth2'));
app.use('/client', require('./routes/client'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
