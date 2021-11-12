const express = require('express');
const helmet = require('helmet');
const requestIp = require('request-ip');
const xss = require('xss-clean');
const compression = require('compression');
const corsHeader = require('./cors_header');
const limiter = require('./requests_limiter');

module.exports = app => {
  app.set('trust proxy', 1);
  app.use(limiter);
  app.use(compression());
  app.use(xss());
  app.use(helmet());
  app.use(requestIp.mw()); //req.clientIp
  app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded
  app.use(express.json({ limit: '10kb' })); // limit req body by 10kb
  app.use(corsHeader);
};
