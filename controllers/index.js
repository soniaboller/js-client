var express = require('express');
var ctrl = express.Router();

/* GET home page. */
ctrl.get('/', function(req, res, next) {
  res.render('index', { title: 'USERZZZ' });
});

ctrl.get('/views/users', function(req, res, next){
  res.render('users', { title: 'AJAX'})
});

module.exports = ctrl;
