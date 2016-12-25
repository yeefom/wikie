const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 8080;

app.use(morgan('dev'));
express.static(path.resolve(__dirname, '../client'));

app.listen(port);
console.log(`wikie started on port ${port}`);
