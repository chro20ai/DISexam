const mongoose = require('mongoose');

// 3. Finish the account schema

const ClientSchema = new mongoose.Schema({
    clientId: String,
    firstName: String,
    lastname: String,
    streetAddress: String,
    city: String
});

const model = mongoose.model('clients', ClientSchema);

module.exports = model;


/*
// 3. Finish the account schema
const TravelsSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
    },
    price: { 
        type: String,
        
    },
    bookingId: { 
        type: String,
    }
});

const modeltravel = mongoose.model('Travel', TravelsSchema);

module.exports = modeltravel;
*/
/*
const clientSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
    },
    streetaddress: { 
        type: String,
        
    },
    city: { 
        type: String,
    }
});

const modelclients = mongoose.model('Travel', clientSchema);

module.exports = modelclients;*/
