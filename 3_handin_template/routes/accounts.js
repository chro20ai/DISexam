const express = require('express');
const router = express.Router();
const db = require("../2_database/db");
const accountModel = require("../models/account");
const reservationModel = require("../models/reservations");

//Endpoint for all users
/*router.get('/', async (req, res) => {
    try {
        // 1. return accounts from database instead
        res.end("This is the GET endpoint on accounts")
    } catch (err) {
        console.log({message: err})
    };
});
*/

// Creating client
db.getConnection().then(async res => {
router.post('/', async (req, res) => {
   
        // if a connection was successfully achieved
        // find and execute are two functions, that called in succession will first describe how to find elements, and then execute the query
        //let accounts = await accountModel.find().exec();
       // console.log("req.body: "+ JSON.stringify(req));
       
       console.log("req: "+ req);
       console.log("req.body: "+ req.body);
       console.log("req.body[0]: "+ req.body[0]);
       console.log("req.body json: "+ JSON.stringify(req.body));
       console.log("req.body json city: "+ JSON.stringify(req.body.city));
       console.log("req.url: " + req.url + req.method)
       console.log(req.body.body.clientId)




        //console.log(req)
        //console.log("res her: "+ JSON.stringify(res))
       let create = await accountModel.create({
        clientId: req.body.body.clientId,
        firstName : req.body.body.firstName,
        lastname : req.body.body.lastname,
        streetAddress : req.body.body.streetAddress,
        city : req.body.body.city  
       })
       console.log(create)
       res.send(create)
    
        // exit system
       // process.exit(1)
    }, err => {
        console.log("ERROR");
        console.log(err);
    });
});

// Updating client
db.getConnection().then(async res => {
router.put('/', async (req, res) => {
   
        // if a connection was successfully achieved
        // find and execute are two functions, that called in succession will first describe how to find elements, and then execute the query
        //let accounts = await accountModel.find().exec();
        //console.log(accounts);
       let update = await accountModel.updateOne({clientId: req.body.body.clientId},{
        firstName : req.body.body.firstName,
        lastname : req.body.body.lastname,
        streetAddress : req.body.body.streetAddress,
        city : req.body.body.city  
       })
       console.log("Client with id: " + req.body.body.clientId + " has been updated")
       console.log(update)
    
        // exit system
      // process.exit(1)
    }, err => {
        console.log("ERROR");
        console.log(err);
    });
});

// Delete client
db.getConnection().then(async res => {
router.delete('/', async (req, res) => {

        // if a connection was successfully achieved
        // find and execute are two functions, that called in succession will first describe how to find elements, and then execute the query
        //let accounts = await accountModel.find().exec();
        //console.log(accounts);
       let deleteClient = await accountModel.deleteOne({clientId: req.body.body.userdata.clientId})
       console.log("Client with id: " + req.body.body.userdata.clientId + " has been deleted")
       console.log(req.body.body.userdata.clientId)
    
        // exit system
      // process.exit(1)
    }, err => {
        console.log("ERROR");
        console.log(err);
    });
});

// get client
db.getConnection().then(async res => {
router.get('/', async (req, res) => {
    
    
        // if a connection was successfully achieved
        // find and execute are two functions, that called in succession will first describe how to find elements, and then execute the query
       let getclient = await accountModel.find({clientId: req.query.clientId})
    
   console.log(getclient)
   res.send(getclient)
    
        // exit system
      // process.exit(1)
    }, err => {
        console.log("ERROR");
        console.log(err);
    });
   
   
});

// Creating reservation
db.getConnection().then(async res => {
router.post('/reservations', async (req, res) => {
    
        // if a connection was successfully achieved
        // find and execute are two functions, that called in succession will first describe how to find elements, and then execute the query
        let client = await accountModel.find({clientId: req.body.body.clientID}).exec();
        console.log(client.length)
        //console.log(accounts);
        if(client.length !== 0){
       let createreservation = await reservationModel.create({
        reservationID : req.body.body.reservationID,
        clientID : req.body.body.clientID,
        date : req.body.body.date,
        hotelName : req.body.body.hotelName,
        price : req.body.body.price,
        balance : req.body.body.balance
       })
       console.log(createreservation)
    }
    if(client.length == 0){
        res.send("Client does not exist")
        console.log("Client does not exist")
    }
    
        // exit system
       // process.exit(1)
    }, err => {
        console.log("ERROR");
        console.log(err);
    });
});

// Update reservation
db.getConnection().then(async res => {
router.put('/reservations', async (req, res) => {

    let updateclient = await accountModel.find({clientId: req.body.body.clientID}).exec();
    if(updateclient.length !== 0){
     let updatereservation = await reservationModel.updateOne({reservationID: req.body.body.reservationID},{
        clientID : req.body.body.clientID,
        date : req.body.body.date,
        hotelName : req.body.body.hotelName,
        price : req.body.body.price,
        balance : req.body.body.balance
       })
       console.log(updatereservation)    
    }
    if(updateclient.length == 0){
        res.send("Client does not exist")
        console.log("Client does not exist")
    }  
    
        // exit system
       // process.exit(1)
    }, err => {
        console.log("ERROR");
        console.log(err);
    });
});

// Delete reservation
db.getConnection().then(async res => {
    router.delete('/reservations', async (req, res) => {
    
            // if a connection was successfully achieved
            // find and execute are two functions, that called in succession will first describe how to find elements, and then execute the query
            //let accounts = await accountModel.find().exec();
            //console.log(accounts);
           let deleteReservation = await reservationModel.deleteOne({reservationID: req.body.body.userdata.reservationID})
           console.log("Reservation with id: " + req.body.body.userdata.reservationID + " has been deleted")
           console.log(req.body.body.userdata.reservationID)
        
            // exit system
          // process.exit(1)
        }, err => {
            console.log("ERROR");
            console.log(err);
        });
    });

// Get a reservation
db.getConnection().then(async res => {
    router.get('/reservations', async (req, res) => {
        
        
            // if a connection was successfully achieved
            // find and execute are two functions, that called in succession will first describe how to find elements, and then execute the query
           let getreservation = await reservationModel.find({reservationID: req.query.reservationID})
        
       console.log(getreservation)
       res.send(getreservation)
        
            // exit system
          // process.exit(1)
        }, err => {
            console.log("ERROR");
            console.log(err);
        });
       
       
    });

module.exports = router;