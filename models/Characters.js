var mongoose = require('mongoose');

var CharacterSchema = new mongoose.Schema({
    sin_name: String,
    runner_name: String,
    priority_set: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Priority' }],
    nuyen: {type: Number, default: 0}
}, {
    usePushEach: true
    }
);

CharacterSchema.methods.addNuyen = function(cb) {
    this.nuyen += 150;
    this.save(cb);
};

mongoose.model('Character', CharacterSchema);