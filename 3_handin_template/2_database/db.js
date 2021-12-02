const mongoose = require('mongoose');

let connection;


const getConnection = async () => {
    if (!connection) {
        connection = await mongoose.connect('mongodb+srv://Admin:Admin@chris.h7fz0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
    }
    return connection;
}

module.exports = {
    getConnection: getConnection
}