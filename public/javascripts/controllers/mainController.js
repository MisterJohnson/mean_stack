    var app = angular.module("app");
    //controller
    app.controller('MainCtrl', [
        '$scope', 'characters',
        function($scope, characters) {
            $scope.characters = characters.characters;
            $scope.title = 'Welcome to the 6th world!';

            $scope.addCharacters = function(){
                if(!$scope.sin_name || $scope.sin_name === ""){
                    return;
                }

                if($scope.runner_name === ""){
                    $scope.runner_name = "Noob";
                }

                characters.create({
                    sin_name: $scope.sin_name,
                    runner_name: $scope.runner_name,
                    nuyen: 0,
                    priority_set: []
                });

                $scope.sin_name = '';
                $scope.runner_name = '';
            };

            $scope.addNuyen = function(character) {
                characters.addNuyen(character);
            };
        }
    ]);