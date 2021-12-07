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
    res.send('Welcome to the banking app fra server B');
});


app.get('*', handler(1))
app.post('*', handler(1));
app.put('*', handler(1));
app.delete('*', handler(1));

const sslServer1 = https.createServer(options, app)
const sslServer2 = https.createServer(options, app)
const sslServer3 = https.createServer(options, app)
const sslServer4 = https.createServer(options, app)


//Start listening
sslServer1.listen(3000, () => {
    console.log('Server listening on 3000');
});

sslServer2.listen(3001, () => {
    console.log('Server listening on 3001');
});

sslServer3.listen(3002, () => {
    console.log('Server listening on 3002');
});

sslServer4.listen(3003, () => {
    console.log('Server listening on 3003');
});