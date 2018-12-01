const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Node.js | Express | Webpack',
    name: 'Jonathan',
    script: 'home',
    stylesheet: 'home'
  });
});

module.exports = router;