const mongoose = require('mongoose');

let schema_ParadeImgs = new mongoose.Schema({
    ParadeImg : { type : String}
});

module.exports = mongoose.model('Paradeimgs', schema_ParadeImgs);