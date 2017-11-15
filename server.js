'use strict';


const express = require('express');
const bodyParser = require('body-parser');
const {BlogPosts} = require('./model');
const jsonParser = bodyParser.json();
const app = express();

BlogPosts.create('something', 'blah blah', 'kayla');
BlogPosts.create('hello word', 'something about the universe', 'firoz');

const blogRouter = require('./blogRouter');

app.use('/blog-posts', blogRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});