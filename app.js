const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const LoginEJSRouter = require('./routes/loginEJS');
const signupEJSRouter = require('./routes/signupEJS');
const RestaurantSignupEJSRouter = require('./routes/RestaurantSignupFormEJS');
const LoginRestaurantEJS = require('./routes/LoginRestaurantEJS');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  const { data } = req.cookies;
  res.render('landingpage', { data: data });
  next();
});

app.use('/loginform', LoginEJSRouter);
app.use('/signupform', signupEJSRouter);
app.use('/RegisterSignupform', RestaurantSignupEJSRouter);
app.use('/loginRestaurant', LoginRestaurantEJS);

app.get('/logout', (req, res) => {
  res.cookie('data', '');
  res.redirect('/');
});

app.get('/menupage', (req, res, next) => {
  const { data } = req.cookies;
  res.render('Menupage', { data: data });
  next();
});

module.exports = app;
