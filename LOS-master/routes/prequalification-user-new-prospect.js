var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('prequalification-user-new-prospect', { title: 'Express' });
});

module.exports = router;
