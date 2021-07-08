import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from'./routes/auth.routes.js';
import { errorHandler } from './middlewares/middlewares.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
import routes from './routes/routes.js';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  if ('OPTIONS' === req.method) {
    res.send(200);
  }
  else {
    next();
  }
});
// app.use(function(req, res, next) {
//   if (!req.headers.authorization) {
//     return res.status(403).json({ error: 'No credentials sent!' });
//   }
//   next();
// });
app.use('/', routes);

app.use(errorHandler);

app.listen(3001, () => {
  console.log('Running.');
});


