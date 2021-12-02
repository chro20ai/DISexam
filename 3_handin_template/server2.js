const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fs = require('fs')
const https = require('https')
const http = require('http')

const options = {
    key: fs.readFileSync('./ssl/client-key.pem'),
    cert: fs.readFileSync('./ssl/client-cert.pem'),
}

const handler = serverNum => (req, res) => {
    console.log(`server ${serverNum}`, req.method, req.url, req.body);
    res.send(`Hello from server ${serverNum}!`);
  };

//Added Json Body-parser
app.use(bodyParser.json());

//Import Routes
const accountRoute = require('./routes/accounts');
app.use('/clients', accountRoute)

//Initial route
app.get('/', (req, res) => {
    res.send('Welcome to the banking app fra server C');
});

app.get('*', handler(2))
app.post('*', handler(2));
app.put('*', handler(2));
app.delete('*', handler(2));

const sslServer = https.createServer(options, app)

//Start listening
sslServer.listen(3001, () => {
    console.log('Server listening on 3001');
});
