var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var moviesRouter = require('./routes/movies');


var session = require('express-session');
// var MongoStore = require('connect-mongo')(session);
// global.mongoskin = require('mongoskin');

// var sessionStore = new MongoStore({
//     host: '127.0.0.1',
//     port: '27017',
//     db: 'session',
//     url: 'mongodb://localhost:27017/movie'
// });

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: '3478129048712904871239084'
    // store: sessionStore
}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/movie-rating/dist')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/moviesRouter', moviesRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
