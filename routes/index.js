const express = require('express');
const router = express.Router();
const depoly = require('../module/deploy');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.all('/deploy/:module', function(req, res, next) {
  let ret = depoly(req.params.module);
  res.send(ret);
});
module.exports = router;
