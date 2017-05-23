var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index.hbs', { title: 'Contacts' });
});

router.get('/loggedin',function(req,res,next){
  res.render('signup.hbs');
})

module.exports = router;
