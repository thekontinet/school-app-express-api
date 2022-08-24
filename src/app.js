const express = require('express');
const createHttpError = require('http-errors');
const helmet = require('helmet');

module.exports = function app(container) {
  const app = express();

  // dev middlewares
  if (process.env.NODE_ENV === 'development') {
    app.use(container.get('logger'));
  }

  // prod middlewares
  app.use(helmet());
  app.use(express.json());

  // Routes
  const userRoute = require('./Routes/index');

  app.get('/', function(req, res) {
    return res.send('Welcome to ROLOM');
  });

  app.use('/', userRoute);

  app.use((req, res, next) => {
    res.status(404);
    next(createHttpError(404, 'Page not found'));
  });

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    return res.json({
      error: true,
      message: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : null,
    });
  });

  return app;
};
