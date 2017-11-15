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

// app.get('/blog-posts', function(req, res) {
//   res.json(BlogPosts.get());
// });

// app.post('/blog-posts', jsonParser, function(req, res){
//   const fields = ['title', 'content', 'author'];
//   for (let i=0; i < fields.length; i++) {
//     if (!(fields[i] in req.body)) {
//       return `Status ${res.status(400)} missing ${fields[i]}`;
//     }
//   }
//   const post = BlogPosts.create(req.body.title, req.body.content, req.body.author);
//   return res.status(201).json(post);
// });

// app.delete('/blog-posts/:id', (req, res) => {
//   BlogPosts.delete(req.params.id);
//   res.status(204).end();
// });

// app.put('/blog-posts/:id', jsonParser, (req, res) => {
//   const fields = ['title', 'content', 'author', 'id'];
//   for (let i = 0; i < fields.length; i++){
//     if (!(fields[i] in req.body )) {
    
//       return `Error ${res.status(400)} missing ${fields[i]}`;
//     } else if (req.params.id !== req.body.id) {
//       return `Error ${res.status(400)} ${req.params.id} must match ${req.body.id}`;
//     } 
 
//   }
  
//   BlogPosts.update({id: req.params.id, title: req.body.title, content: req.body.content, author: req.body.author});  
//   console.log(req.params); 
//   res.status(204).end();
// });





app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});