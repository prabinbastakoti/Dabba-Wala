require('express-async-errors');
const express = require('express');
const app = express();
const middleware = require('./utils/middleware');
const AuthRouter = require('./routes/auth');
const MenuRouter = require('./routes/menu');

app.use(express.json());

app.use('/api/auth', AuthRouter);
app.use('/api/menu', MenuRouter);

app.use(middleware.unknownEndpoint);

app.use(middleware.errorHandler);

module.exports = app;
