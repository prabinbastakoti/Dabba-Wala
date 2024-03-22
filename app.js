const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const LoginEJSRouter = require('./routes/loginEJS');
const signupEJSRouter = require('./routes/signupEJS');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  res.render('landingpage');
  next();
});

app.use('/loginform', LoginEJSRouter);
app.use('/signupform', signupEJSRouter);

app.get('/homepage', (req, res) => {
  const { data } = req.cookies;
  res.render('homepage', { data: data });
});

module.exports = app;
