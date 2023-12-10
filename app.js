var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var flash = require('connect-flash');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = require('./routes/users'); // Assuming your user model is in the 'models' directory

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// creating the session to store the data and also use for flash message;
app.use(session({  //ya pr humm allow krte ha ki humm session use kr skte ha passport ka sath
  resave: false,
  secret: 'user passport',
  saveUninitialized: false,
}));


// user-defined middleware:
// after creating the session, we need to create the passport middleware serialize and deserialize method
app.use(passport.initialize()); // ya pr humm passport ko initialize kr rhe ha
app.use(passport.session()); // ya passport apny data ko session ma store kr rha ha
passport.serializeUser(usersRouter.serializeUser()); // ya pr huum passport ko serialize kr rhe ha means hash kr rhe ha
passport.deserializeUser(usersRouter.deserializeUser()); // 
// logger started
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(flash({
  sessionKeyName: 'flashMessage',
  onAddFlash: function (message) {
    console.log(message);
  }
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to the error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
