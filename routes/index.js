var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {  //function is a controller function, it's what we want to call when we hit the route
  res.render('index', {
    title: 'Express', }); //Express is the content that index
});




router.get('/about', function(req,res, next) {
    res.render('about', {
      title: 'Cars',
      technologies: ['Express', 'EJS', 'Bootstrap']

    });
});
module.exports = router;
