const mongoose = require('mongoose');

let schema_RankHolder = new mongoose.Schema({
    RankHolderIMG : { type : String},
    RankHolderName : { type : String},
    RankHolderBelt : { type : String},
    RankHolderDesig : { type : String}

});
module.exports = mongoose.model('rankholders', schema_RankHolder); 