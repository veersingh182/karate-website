const mongoose = require('mongoose');

let Schema_membersSetails = new mongoose.Schema({
    Img : {type : String},
    Name : {type : String},
    Designation : {type : String},
    CadetName : {type : String}
});

module.exports = mongoose.model('members', Schema_membersSetails);