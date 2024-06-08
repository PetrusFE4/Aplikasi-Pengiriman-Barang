const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

// const apiRouter = require('./routes/userRoutes');

var indexRouter = require('./routes/index');
var usersRoutes = require('./routes/usersRoutes');
// var bodyParser = require('body-parser');

const app = express();


app.use('/routes/register', usersRoutes);

// app.use(express.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//middleware to 
app.use(cors());
app.use(bodyParser.json());

//routes setup
app.use('/', indexRouter);
app.use('/users', usersRoutes);
// app.use('/api', apiRouter);

//servers
// app.listen(PORT, () =>{
//   console.log(`server is running on http://localhost:${PORT}`);
// })


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
