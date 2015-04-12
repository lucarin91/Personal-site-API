var express = require('express');
var router = express.Router();
var authController = require('../controllers/auth');

var mongoose = require('mongoose');
var Client = require('../models/Client.js');

/* GET /users listing. */
router.get('/', authController.isAuthenticated, function(req, res, next) {
  Client.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

/* POST /users */
router.post('/', authController.isAuthenticated, function(req, res, next) {
  console.log(req.body);
  Client.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /users/:id */
router.get('/:id', function(req, res, next) {
  Client.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /users/:id */
router.put('/:id', function(req, res, next) {
  Client.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /users/:id */
router.delete('/:id', function(req, res, next) {
  Client.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
