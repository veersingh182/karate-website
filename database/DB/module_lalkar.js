const mongoose = require('mongoose');

let schema_LalkarImgs = new mongoose.Schema({
    LalkarImg : { type : String}
});

module.exports = mongoose.model('lalkarimgs', schema_LalkarImgs);