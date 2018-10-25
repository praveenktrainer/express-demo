var express = require('express');
var router = express.Router();
const cities = require("../data/cities");

/* GET home page. */
router.get('/', function(req, res, next) {  
  res.render('index', { title: 'Edureka Session', cities : cities.list });
});

module.exports = router;
