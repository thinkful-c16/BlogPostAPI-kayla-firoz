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

let server;

function runServer() {
  const port = process.env.PORT || 8080;
  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
      console.log(`Your app is listening on port ${port}`);
      resolve(server);
    }).on('error', err => {
      reject(err);
    });
  });
}

function closeServer() {
  return new Promise((resolve, reject)=> {
    console.log('Closing server.');
    server.close(err => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
}

module.exports = {app, runServer, closeServer};


// app.listen(process.env.PORT || 8080, () => {
//   console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
// });