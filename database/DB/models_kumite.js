const mongoose = require('mongoose');

let schema_kumiteImgs = new mongoose.Schema({
    KumiteImg : { type : String}
});

module.exports = mongoose.model('kumiteimgs', schema_kumiteImgs);