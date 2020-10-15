// Import lib
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

const server = express();

console.log(pages)

server
// Static files
  .use(express.static('public'))

  //Configure template engine
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs')


  // Rotue application
  .get('/', pages.index)
  .get('/orphanage', pages.orphanage)
  .get('/orphanages', pages.orphanages)
  .get('/create-orphanage', pages.createOrphanage)

// Start server
server.listen(3000)