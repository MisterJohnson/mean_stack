var app = angular.module("app");

//controller
app.controller('adminController', [
    '$scope', 'priority',
    function($scope, priority) {
        $scope.title = 'Welcome to the 6th world!';

        $scope.addPriority = function(){
            if(!$scope.category || $scope.category === ""){
                $scope.category = "undefined";
            }

            if(!$scope.name || $scope.name === ""){
                return;
            }

            if(!$scope.rank || $scope.rank === ""){
                return;
            }

            priority.data.create({
                category: $scope.category,
                name: $scope.name,
                rank: $scope.rank,
                desc: $scope.desc,
                full_description: $scope.description
            });

            $scope.category = '';
            $scope.name = '';
            $scope.rank = '';
            $scope.desc = '';
            $scope.description = '';
        };
    }
]);