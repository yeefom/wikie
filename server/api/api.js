const express = require('express');
const router = express.Router();

router.get('/bookmarks', (req, res) => {
  res.send('bookmarks api');
});

module.exports = router;
