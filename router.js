const express = require('express');
const router = express.Router();
const cors = require('cors');

router.get('/', cors(), (req, res) => {
  // res.header('Access-Control-Allow-Origin', 'localhost:3000')
  res.send('Server is up and running');
});

module.exports = router;
