angular.module('app', ['ui.router'])
        .config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: '/home.html',
                    controller: 'MainCtrl',
                    resolve: {
                        postPromise: ['characters', function(characters){
                            return characters.getAll();
                        }]
                    }
                });

            $stateProvider
                .state('character', {
                    url: '/character/{id}',
                    templateUrl: '/character.html',
                    controller: 'CharacterCtrl',
                    resolve: {
                        character: ['$stateParams', 'characters', function($stateParams, characters) {
                            return characters.get($stateParams.id);
                        }]
                    }
                });

            $stateProvider
                .state('admin', {
                    url: '/admin',
                    templateUrl: '/admin.html',
                    controller: 'adminController'
                });

            $stateProvider
                .state('addWeapon', {
                    url: '/addWeapon',
                    templateUrl: '/addWeapon.html',
                    controller: 'adminController'
                });

            $urlRouterProvider.otherwise('home');
        }]);
