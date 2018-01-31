var mongoose = require('mongoose');

var DataEntrySchema = new mongoose.Schema({
    category: String,
    name: String,
    rank: String,
    desc: String,
    full_description: String
});

mongoose.model('DataEntry', DataEntrySchema);