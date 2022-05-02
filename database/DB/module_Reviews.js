const mongoose = require('mongoose');

let schema_Review = new mongoose.Schema({
    ReviewerIMG : { type : String},
    ReviewerName : { type : String},
    Review : { type : String}

});
module.exports = mongoose.model('reviews', schema_Review); 