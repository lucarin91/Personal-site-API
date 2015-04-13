var express = require('express');
var router = express.Router();
var authController = require('../controllers/auth');
var mongoose = require('mongoose');
var Skills = require('../models/Skills.js');

/* GET /skills listing. */
router.get('/', function(req, res, next) {
  Skills.find({user:req.userId}, function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

/* POST /skills */
router.post('/', authController.isAuthenticated, function(req, res, next) {
  req.body.user = req.user._id;
  Skills.update({user:req.user._id}, req.body, {upsert:true}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /skills */
router.delete('/', authController.isAuthenticated, function(req, res, next) {
  Skills.remove({user:req.user._id}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
