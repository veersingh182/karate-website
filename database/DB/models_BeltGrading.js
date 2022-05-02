const mongoose = require('mongoose');

let schema_beltGradingImgs = new mongoose.Schema({
    BeltGradingImg : {type : String}
});

module.exports = mongoose.model('beltgradingimgs', schema_beltGradingImgs);