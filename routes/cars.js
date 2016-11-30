var express = require('express');
var _ = require('lodash');
var router = express.Router();

var cars = [
  {
    _id:   0,
    make:  'Tesla',
    model: 'S',
    color: 'black',
    year:  2014
  },
  {
    _id:   1,
    make:  'Porsche',
    model: '911',
    color: 'silver',
    year:  2011
  }
];

router.get('/', function(request, response) {
  // response.send('Cars index');
   response.render('cars/index', { title: 'Cars Index', cars: cars } );
});

// order matters here, we need new before show
router.get('/new', function(request, response) {
  response.send('Cars new');
});

router.get('/:id', function(request, response) {
  response.send('Cars show with id = ' + request.params.id);
});

router.post('/', function(request, response) {
  response.send('Cars create');
});

router.get('/:id/edit', function(request, response) {
  response.send('Cars edit with id = ' + request.params.id);
});

router.put('/:id', function(request, response) {
  response.send('Cars update with id = ' + request.params.id);
});

router.delete('/:id', function(request, response) {
  response.send('Cars delete with id = ' + request.params.id);
});

module.exports = router;