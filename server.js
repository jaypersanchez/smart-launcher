//Express related libraries
const express = require('express');
var Promise = require('promise');
var session = require('express-session');
var router = express.Router();
const url = require('url');
const querystring = require('querystring');
var server = express();
require('dotenv').config();

//these should be in a config file
const express_host = process.env.EXPRESS_HOST;
const express_port = process.env.EXPRESS_PORT;


/*
* Process default root index file
*/
server.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.get('/smart-contract', (req, res) => {
  //var _query = url.parse(req.url, true).query;
  //var streamData = _query.stream;
  res.sendFile(__dirname + '/deployment.html');
});



server.listen(express_port, () => console.log(`Server listening at http://${express_host}:${express_port}`));


