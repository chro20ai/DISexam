const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fs = require('fs')
const https = require('https')

const options = {
    key: fs.readFileSync('./ssl/client-key.pem'),
    cert: fs.readFileSync('./ssl/client-cert.pem'),
}

const sslServer = https.createServer(options, app)

//Added Json Body-parser
app.use(bodyParser.json());

//Import Routes
const accountRoute = require('./routes/accounts');
app.use('/clients', accountRoute)

//Initial route
app.get('/', (req, res) => {
    res.send('Welcome to the banking app');
});

//Start listening
sslServer.listen(3001, () => {
    console.log('Server listening on 3001');
});
