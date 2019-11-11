const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Client = new Schema({
    client_gender:{
        type: String
    },
    client_firstname: {
        type: String
    },
    client_familyname: {
        type: String
    },
    client_mail: {
        type: String
    },
    client_password: {
        type: String
    }
});

module.exports = mongoose.model('Client', Client);