var app = angular.module("app");

app.factory('characters', ['$http', function($http){
    var c = {
        characters: []
    };

    c.getAll = function() {
        return $http.get('/characters').success(function(data){
            angular.copy(data, c.characters);
        });
    };

    c.get = function(id) {
        return $http.get('/characters/' + id).then(function(res){
            return res.data;
        });
    };

    c.create = function(characters) {
        return $http.post('/characters', characters).success(function(data){
            c.characters.push(data);
        });
    };

    c.addNuyen = function(character) {
        return $http.put('/characters/' + character._id + '/addNuyen')
            .success(function(data){
                character.nuyen += 150;
            });
    };

    return c;
}]);