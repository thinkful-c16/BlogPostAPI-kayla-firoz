'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const {BlogPosts} = require('./model');

const jsonParser = bodyParser.json();
const app = express();

// BlogPosts.create('something', 'blah blah', 'kayla');

app.get('/blog-posts', function(req, res) {
  res.json(BlogPosts.get());
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});