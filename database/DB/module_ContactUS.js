const mongoose = require('mongoose');

let schema_ContactUs = new mongoose.Schema({
    Name : { type : String},
    Email : { type : String},
    Message : { type : String}

});
module.exports = mongoose.model('contactus', schema_ContactUs); 