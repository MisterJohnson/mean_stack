var app = angular.module("app");

    app.controller('CharacterCtrl', [
        '$scope',
        'characters',
        'character',
        function($scope, characters, character){
            $scope.character = character;

            /* Form binding value */
            $scope.magic_type_array = {
                "A - Mystic Adept, Mage, Technomancer" : "A",
                "B - Mystic Adept, Mage, Technomancer, Adept" : "B",
                "C - Mystic Adept, Mage, Technomancer, Adept" : "C",
                "D - Adept" : "D",
                "E - Mundane" : "E"
            };
            $scope.skills_type_array = {
                "A - 46 skills points / 10 group points" : "A",
                "B - 36 skills points / 5 group points" : "B",
                "C - 28 skills points / 2 group points" : "C",
                "D - 22 skills points / 0 group points" : "D",
                "E - 18 skills points / 0 group points" : "E"
            };

            var priorityArray = [
                $scope.magic_type,
                $scope.skills,
                $scope.attributes,
                $scope.metatype,
                $scope.ressources
            ];

            var flag = false;

            $scope.onMagicTypeChangeCheck = function(magic_type){
                flag = false;
                for(var i=0; i < priorityArray.length; i++){
                    if(magic_type === priorityArray[i] && priorityArray[i] !== ""){
                        flag = true;
                    }
                }
                priorityArray[0] = magic_type
            };

            $scope.onSkillChangeCheck = function(skills){
                flag = false;
                for(var i=0; i < priorityArray.length; i++){
                    if(skills === priorityArray[i] && priorityArray[i] !== ""){
                        flag = true;
                    }
                }
                priorityArray[1] = skills
            };

            $scope.hasError = function(){
                return (flag === true)? "btn btn-danger" : "";
            };

            $scope.addPriority = function(){
                if(!$scope.magic_type || $scope.magic_type === "") {
                }
                if(!$scope.skills || $scope.skills === "") {
                    alert("you need to fill the skills priority zone");
                }
                if(!$scope.attributes || $scope.attributes === "") {
                    alert("you need to fill the attributes priority zone");
                }
                if(!$scope.metatype || $scope.metatype === "") {
                    alert("you need to fill the metatype priority zone");
                }
                if(!$scope.ressources || $scope.ressources === "") {
                    alert("you need to fill the ressources priority zone");
                }
            };
        }
    ]);