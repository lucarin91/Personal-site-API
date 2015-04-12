var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Me = require('../models/Me.js');

/* GET /users listing. */
router.get('/', function(req, res, next) {
  Me.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

/* POST /users */
router.post('/', function(req, res, next) {
  Me.create(req.body, function (err, post) {
    console.log('post');
    if (err) {
      console.log('error');
      return next(err);
    }
    res.json(post);
  });
});

/* GET /users/:id */
router.get('/:id', function(req, res, next) {
  Me.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /users/:id */
router.put('/:id', function(req, res, next) {
  Me.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /users/:id */
router.delete('/:id', function(req, res, next) {
  Me.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
