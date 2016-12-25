const express = require('express');
const db = require('../utils/dbUtils');

const router = express.Router();

router.get('/bookmarks', (req, res) => {
  db.query('SELECT * FROM bookmarks').then(data => {
    res.send(data.rows);
  }).catch(err => {
    console.error('error getting bookmarks', err);
    res.sendStatus(500);
  });
});

router.post('/bookmarks', (req, res) => {
  res.send('bookmark saved');
});

module.exports = router;
