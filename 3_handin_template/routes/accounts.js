const express = require('express');
const router = express.Router();
const Account = require('../models/account');
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
        //console.log(accounts);
       let create = await accountModel.create({
        clientId: req.body.clientId,
        firstName : req.body.firstName,
        lastname : req.body.lastname,
        streetAddress : req.body.streetAddress,
        city : req.body.city  
       })
       console.log(create)
    
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
       let update = await accountModel.updateOne({clientId: req.body.clientId},{
        firstName : req.body.firstName,
        lastname : req.body.lastname,
        streetAddress : req.body.streetAddress,
        city : req.body.city  
       })
       console.log("Client with id: " + req.body.clientId + " has been updated")
    
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
       let deleteClient = await accountModel.deleteOne({clientId: req.body.userdata.clientId})
       console.log("Client with id: " + req.body.userdata.clientId + " has been deleted")
       console.log(req.body.userdata.clientId)
    
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
        let client = await accountModel.find({clientId: req.body.clientID}).exec();
        console.log(client.length)
        //console.log(accounts);
        if(client.length !== 0){
       let createreservation = await reservationModel.create({
        reservationID : req.body.reservationID,
        clientID : req.body.clientID,
        date : req.body.date,
        hotelName : req.body.hotelName,
        price : req.body.price,
        balance : req.body.balance
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
    
        // if a connection was successfully achieved
        // find and execute are two functions, that called in succession will first describe how to find elements, and then execute the query
        //let accounts = await accountModel.find().exec();
        //console.log(accounts);
       let updatereservation = await reservationModel.updateOne({reservationID: req.body.reservationID},{
        clientID : req.body.clientID,
        date : req.body.date,
        hotelName : req.body.hotelName,
        price : req.body.price,
        balance : req.body.balance
       })
       
    
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
           let deleteReservation = await reservationModel.deleteOne({reservationID: req.body.userdata.reservationID})
           console.log("Reservation with id: " + req.body.userdata.reservationID + " has been deleted")
           console.log(req.body.userdata.reservationID)
        
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