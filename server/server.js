const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const apiRouter = require('./api/api');

const app = express();
const port = 8080;

app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, '../client')));

app.use('/api', bodyParser.json());
app.use('/api', apiRouter);

app.listen(port);
console.log(`wikie started on port ${port}`);
