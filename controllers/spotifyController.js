const db = require("../models");
var express = require('express');
const app = express;
const client_id = "da71d13f9d404e7ea1580dd3f6839f64";
const client_secret = "da9b42c4c6284b3c9f97ddcb80e0ab4e";
// Defining methods for the spotifyController
module.exports = {
  authenticate: function (req, res) {
    app.get('/login', function (req, res) {
      var scopes = 'user-read-private user-read-email';
      res.redirect('https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + client_id +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' + encodeURIComponent(redirect_uri));
    });
  }
};