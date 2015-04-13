var express = require('express');
var router = express.Router();
var authController = require('../controllers/auth');
var mongoose = require('mongoose');
var Projects = require('../models/Projects.js');

/* GET /projects listing. */
router.get('/', function(req, res, next) {
  Projects.find({user:req.userId}, function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

/* POST /projects */
router.post('/', authController.isAuthenticated, function(req, res, next) {
  req.body.user = req.user._id;
  Projects.update({user:req.user._id}, req.body, {upsert:true}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /projects */
router.delete('/', authController.isAuthenticated, function(req, res, next) {
  Projects.remove({user:req.user._id}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
