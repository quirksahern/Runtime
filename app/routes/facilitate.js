var express = require('express');
const fs = require('node:fs');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', (req, res) => {
  try {
    fs.unlinkFileSync('.lock');
  } catch (err) {
    console.error(err);
  }
})

module.exports = router;