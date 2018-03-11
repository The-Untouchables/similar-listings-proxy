const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const roomsRouter = require('./rooms-router.js');
const apiRouter = require('./api-router.js');
const morgan = require('morgan');


const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-Parse-Application-Id, X-Parse-REST-API-Key, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Max-Age', 10); // Seconds.
  next();
});
app.use(express.static(path.resolve('public')));
app.use('/rooms', roomsRouter);
app.use('/api/rooms', apiRouter);

app.get('/', (req, res, next) => res.sendFile('index.html', {root: path.resolve('public')}));

app.get('*', (req, res, next) => res.sendStatus(404));
app.use((err, req, res, next) => res.sendStatus(500));

module.exports = app;
