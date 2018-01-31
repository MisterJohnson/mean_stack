var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Character = mongoose.model('Character');
var Priority = mongoose.model('Priority');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

//Get a list of all the characters
router.get('/characters', function(req, res, next) {
    Character.find(function(err, characters){
        if(err){ return next(err); }
        res.json(characters);
    });
});

//Get a specific character
router.get('/characters/:character', function(req, res, next) {
    req.character.populate('priority_set', function(err, character) {
        if (err) { return next(err); }
        res.json(character);
    });
});

//create a specific character
router.post('/characters', function(req, res, next) {
    var character = new Character(req.body);

    character.save(function(err, character){
        if(err){ return next(err); }

        res.json(character);
    });
});

//add some nuyen to a character
router.put('/characters/:character/addNuyen', function(req, res, next) {
    req.character.addNuyen(function(err, character){
        if (err) { return next(err); }
        res.json(character);
    });
});

router.post('/characters/:character/priorities', function(req, res, next) {
    var priority = new Priority(req.body);
    priority.character = req.character;

    priority.save(function(err, priority){
        if(err){ return next(err); }

        req.character.priority_set.push(priority);
        req.character.save(function(err, character) {
            if(err){ return next(err); }

            res.json(priority);
        });
    });
});

//Return a character object based on an ID
router.param('character', function(req, res, next, id) {
    var query = Character.findById(id);

    query.exec(function (err, character){
        if (err) { return next(err); }
        if (!character) { return next(new Error('can\'t find character')); }

        req.character = character;
        return next();
    });
});

module.exports = router;