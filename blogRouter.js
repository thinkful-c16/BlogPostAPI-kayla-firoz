'use strict';

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {BlogPosts} = require('./model.js');


router.get('/', function(req, res) {
  res.json(BlogPosts.get());
});


module.exports = router;