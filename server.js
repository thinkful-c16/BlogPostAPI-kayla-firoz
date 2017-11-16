'use strict';


const express = require('express');
const bodyParser = require('body-parser');
const {BlogPosts} = require('./model');
const jsonParser = bodyParser.json();
const app = express();

BlogPosts.create('something', 'blah blah', 'kayla');
BlogPosts.create('hello word', 'something about the universe', 'firoz');

const blogRouter = require('./blogRouter_GET-POST');
const blogRouterDelPut = require('./blogRouter_DEL-PUT');

app.use('/blog-posts', blogRouter);
app.use('/blog-posts', blogRouterDelPut);


app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});