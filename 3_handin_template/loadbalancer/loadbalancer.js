const express = require('express');
const request = require('request');
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')
const https = require('https')

const servers = ['https://localhost:3000', 'https://localhost:3001' ];


const options = {
  key: fs.readFileSync('../ssl/client-key.pem'),
  cert: fs.readFileSync('../ssl/client-cert.pem'),
}


const sslServer = https.createServer(options, app)


let cur = 0;

//Import Routes


const handler = (req, res) => {
  // Pipe the vanilla node HTTP request (a readable stream) into `request`
  // to the next server URL. Then, since `res` implements the writable stream
  // interface, you can just `pipe()` into `res`.
  req.pipe(request({ url: servers[cur] + req.url })).pipe(res);
  cur = (cur + 1) % servers.length;
};

const accountRoute = require('../routes/accounts.js');
app.get('*', handler)
app.post('*', handler)
app.use('/clients', accountRoute);
app.get('/', (req, res) => {
  res.send('Welcome to the banking app');
});


app.use(bodyParser.json());

sslServer.listen(8080, () => {
  console.log('Load Balancer listening on 8080');
});

