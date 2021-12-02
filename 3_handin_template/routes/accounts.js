const express = require('express');
const router = express.Router();
const db = require("../2_database/db");
const accountModel = require("../models/account");
const reservationModel = require("../models/reservations");


//Create a client
db.getConnection().then(async res => {
router.post('/', async (req, res) => {
    
       let create = await accountModel.create({
        clientId: req.body.body.clientId,
        firstName : req.body.body.firstName,
        lastname : req.body.body.lastname,
        streetAddress : req.body.body.streetAddress,
        city : req.body.body.city  
       })
       console.log(create)
       res.send(create)

    }, err => {
        console.log("ERROR");
        console.log(err);
    });
});

// Update a client
db.getConnection().then(async res => {
router.put('/', async (req, res) => {

       let update = await accountModel.updateOne({clientId: req.body.body.clientId},{
        firstName : req.body.body.firstName,
        lastname : req.body.body.lastname,
        streetAddress : req.body.body.streetAddress,
        city : req.body.body.city  
       })
       console.log("Client with id: " + req.body.body.clientId + " has been updated")
       console.log(update)

    }, err => {
        console.log("ERROR");
        console.log(err);
    });
});

// Delete a client
db.getConnection().then(async res => {
router.delete('/', async (req, res) => {

       let deleteClient = await accountModel.deleteOne({clientId: req.body.body.userdata.clientId})
       console.log("Client with id: " + req.body.body.userdata.clientId + " has been deleted")
       console.log(req.body.body.userdata.clientId)

    }, err => {
        console.log("ERROR");
        console.log(err);
    });
});

// get aa client
db.getConnection().then(async res => {
router.get('/', async (req, res) => {
       let getclient = await accountModel.find({clientId: req.query.clientId})
        console.log(getclient)
        res.send(getclient)

    }, err => {
        console.log("ERROR");
        console.log(err);
    });  
});

// Creating a reservation
db.getConnection().then(async res => {
router.post('/reservations', async (req, res) => {

        let client = await accountModel.find({clientId: req.body.body.clientID}).exec();
        console.log(client.length)

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
        console.log("Client does not exist")}
    }, err => {
        console.log("ERROR");
        console.log(err);
    });
});

// Update a reservation
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
    }, err => {
        console.log("ERROR");
        console.log(err);
    });
});

// Delete a reservation
db.getConnection().then(async res => {
    router.delete('/reservations', async (req, res) => {

           let deleteReservation = await reservationModel.deleteOne({reservationID: req.body.body.userdata.reservationID})
           console.log("Reservation with id: " + req.body.body.userdata.reservationID + " has been deleted")
           console.log(req.body.body.userdata.reservationID)

        }, err => {
            console.log("ERROR");
            console.log(err);
        });
    });

// Get a reservation
db.getConnection().then(async res => {
    router.get('/reservations', async (req, res) => {

        let getreservation = await reservationModel.find({reservationID: req.query.reservationID})
            console.log(getreservation)
            res.send(getreservation)

        }, err => {
            console.log("ERROR");
            console.log(err);
        });
       
       
    });

module.exports = router;