const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const fs = require('fs')
const request = require('request')
const https = require('https')
const got = require('got');



const serverB = require('./server1.js')
const serverC = require('./server2.js')

const servers = ['https://localhost:3000', 'https://localhost:3001' ];

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0" // Avoids DEPTH_ZERO_SELF_SIGNED_CERT error for self-signed certs
const options = {
    key: fs.readFileSync('./ssl/client-key.pem'),
    cert: fs.readFileSync('./ssl/client-cert.pem'),
}

let cur = 0;


const handler = async (req, res) => {
    // Pipe the vanilla node HTTP request (a readable stream) into `request`
    // to the next server URL. Then, since `res` implements the writable stream
    // interface, you can just `pipe()` into `res`.
    console.log(req.method)
    request({ url: servers[cur] + req.url }).pipe(res);
    if(req.method == "GET"){
        request({ url: servers[cur] + req.url }).pipe(res);
    }

    if(req.method == "POST"){
    const {body} = await got.post(servers[cur] + req.url, {
		json: {
			body: req.body
		},
		responseType: 'json'
	});
}
    if(req.method == "PUT"){
        const {body} = await got.put(servers[cur] + req.url, {
            json: {
                body: req.body
            },
            responseType: 'json'
        });
    }
    
    if(req.method == "DELETE"){
        const {body} = await got.delete(servers[cur] + req.url, {
            json: {
                body: req.body
            },
            responseType: 'json'
        });
    }
   
 
    cur = (cur + 1) % servers.length;
    
  };

app.use(bodyParser.json());

//const server = app.get('*', handler).post('*', handler);
app.get('*', handler)
app.post('*', handler);
app.put('*', handler);
app.delete('*', handler);

//server.listen(5000);

const sslServer = https.createServer(options, app)
//Start listening

sslServer.listen(8080, () => {
    console.log('Server listening on 8080');
});