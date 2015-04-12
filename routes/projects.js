var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Projects = require('../models/Projects.js');

/* GET /users listing. */
router.get('/', function(req, res, next) {
  Projects.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

/* POST /users */
router.post('/', function(req, res, next) {
  Projects.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /users/:id */
router.get('/:id', function(req, res, next) {
  Projects.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /users/:id */
router.put('/:id', function(req, res, next) {
  Projects.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /users/:id */
router.delete('/:id', function(req, res, next) {
  Projects.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
