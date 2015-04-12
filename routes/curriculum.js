var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Curriculum = require('../models/Curriculum.js');

/* GET /users listing. */
router.get('/', function(req, res, next) {
  Curriculum.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

/* POST /users */
router.post('/', function(req, res, next) {
  Curriculum.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /users/:id */
router.get('/:id', function(req, res, next) {
  Curriculum.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /users/:id */
router.put('/:id', function(req, res, next) {
  Curriculum.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /users/:id */
router.delete('/:id', function(req, res, next) {
  Curriculum.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
