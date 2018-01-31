var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Character = mongoose.model('Character');
var DataEntry = mongoose.model('DataEntry');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('admin', { title: 'Administration panel' });
});

router.post('/data/priorities', function(req, res, next) {
    var dataEntry = new DataEntry(req.body);

    dataEntry.save(function(err, dataEntry){
    if(err){ return next(err); }
        res.json(dataEntry);
    });
});

module.exports = router;