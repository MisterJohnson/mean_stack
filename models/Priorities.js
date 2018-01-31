var mongoose = require('mongoose');

var PrioritySchema = new mongoose.Schema({
    magic: Object,
    attributes: Object,
    skills: Object,
    metatype: Object,
    ressources: {type: Number, default: 6000},
    priority_set: Object,
    character_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }]
});

mongoose.model('Priority', PrioritySchema);