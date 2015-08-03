var express = require('express');
var router = express.Router();
var unirest = require('unirest');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/help', function (req,res,next){
  unirest.get()
  res.render('index');
});

module.exports = router;
