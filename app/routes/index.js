var express = require('express');
const fs = require('node:fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res) => {
  try {
    fs.writeFileSync('./lock', content);
  } catch (err) {
    console.error(err);
  }
})

module.exports = router;