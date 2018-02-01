var app = angular.module("app");

app.factory('priority', ['$http', function($http) {
    var a = {
      priority : []
    };

    a.create = function(dataEntry) {
        return $http.post('/admin/data/priorities', dataEntry).success(function(data){
            a.priority.push(data);
        });
    };

    return a;
}]);