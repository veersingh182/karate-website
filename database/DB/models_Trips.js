const mongoose = require('mongoose');
const module_ContactUS = require('./module_ContactUS');

let schema_TripImgs = new mongoose.Schema({
    TripImg : {type : String}
});

module.exports = mongoose.model('tripimgs', schema_TripImgs);