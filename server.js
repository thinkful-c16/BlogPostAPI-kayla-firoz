'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const {BlogPosts} = require('./model');

const jsonParser = bodyParser.json();
const app = express();

BlogPosts.create('something', 'blah blah', 'kayla');
BlogPosts.create('hello word', 'something about the universe', 'firoz');


app.get('/blog-posts', function(req, res) {
  res.json(BlogPosts.get());
});

app.post('/blog-posts', jsonParser, function(req, res){
  const fields = ['title', 'content', 'author'];
  for (let i=0; i < fields.length; i++) {
    if (!(fields[i] in req.body)) {
      console.log(fields);
      return `Status ${res.status(400)} missing ${fields[i]}`;
    }
  }
  const post = BlogPosts.create(req.body.title, req.body.content, req.body.author);
  return res.status(201).json(post);
});

app.delete('/blog-posts/:id', (req, res) => {
  BlogPosts.delete(req.params.id);
  res.status(204).end();

});





app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});