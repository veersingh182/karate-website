const mongoose = require('mongoose');
const module_ContactUS = require('./module_ContactUS');

let schema_selfDefenceImgs = new mongoose.Schema({
    selfDefenceImg : {type : String}
});

module.exports = mongoose.model('selfdefenceimgs', schema_selfDefenceImgs);