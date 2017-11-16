'use strict';

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {BlogPosts} = require('./model.js');


router.get('/', function(req, res) {
  res.json(BlogPosts.get());
});


router.post('/', jsonParser, function(req, res){
  const fields = ['title', 'content', 'author'];
  for (let i=0; i < fields.length; i++) {
    if (!(fields[i] in req.body)) {
      return `Status ${res.status(400)} missing ${fields[i]}`;
    }
  }
  const post = BlogPosts.create(req.body.title, req.body.content, req.body.author);
  return res.status(201).json(post);
});

module.exports = router;