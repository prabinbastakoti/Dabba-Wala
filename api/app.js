require('express-async-errors');
const express = require('express');
const cors = require('cors');
const app = express();
const middleware = require('./utils/middleware');
const AuthRouter = require('./routes/auth');
const MenuRouter = require('./routes/menu');
const RestaurantRouter = require('./routes/restaurant');
const UploadRouter = require('./routes/upload');

app.use(cors());
app.use(express.json());
app.use('/api/uploads', express.static(__dirname + '/uploads'));

app.use('/api/auth', AuthRouter);
app.use('/api/menu', MenuRouter);
app.use('/api/restaurant', RestaurantRouter);
app.use('/api/upload', UploadRouter);

app.use(middleware.unknownEndpoint);

app.use(middleware.errorHandler);

module.exports = app;
