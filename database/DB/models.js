const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    Heading_Update : { type : String},
    Document_Update : { type : String},
    Img_Link : { type : String}

});
module.exports = mongoose.model('updates', schema); 


