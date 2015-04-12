var express = require('express');
var router = express.Router();
var Client = require('../models/Client');
var server = require('../controllers/oauth2');
var authController = require('../controllers/auth');

router.get('/authorize', authController.isAuthenticated,
    server.authorization(function(clientId, redirectUri, callback) {

    Client.findOne({ _id: clientId }, function (err, client) {
      if (err) { return callback(err); }

      return callback(null, client, redirectUri);
    });
  }),
  function(req, res){
    res.render('dialog.ejs', { transactionID: req.oauth2.transactionID, user: req.user, client: req.oauth2.client });
  }
);

router.post('/authorize', authController.isAuthenticated,
  server.decision()
);

router.post('/token', authController.isClientAuthenticated,
  server.token(),
  server.errorHandler()
);

module.exports = router;
