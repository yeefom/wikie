const express = require('express');
const morgan = require('morgan');
const path = require('path');
const apiRouter = require('./api/api');

const app = express();
const port = 8000;

app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, '../dist')));

app.use('/api', apiRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});

app.listen(port);
console.log(`wikie started on port ${port}`);
