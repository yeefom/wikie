const express = require('express');
const bodyParser = require('body-parser');
const db = require('../utils/dbUtils');

const router = express.Router();

router.use(bodyParser.json());

router.get('/bookmarks', (req, res) => {
  db.query('SELECT * FROM bookmarks').then(data => {
    res.send(data.rows);
  }).catch(err => {
    console.error('error getting bookmarks', err);
    res.sendStatus(500);
  });
});

router.post('/bookmarks', (req, res) => {
  const {url, title} = req.body;

  db.query(`INSERT INTO bookmarks (url, title) VALUES ('${url}', '${title}')`).then(() => {
    res.sendStatus(201);
  }).catch(err => {
    console.error('error posting bookmarks', err);
    res.sendStatus(500);
  });
});

router.use('*', (req, res) => {
  res.sendStatus(501);
});

module.exports = router;
