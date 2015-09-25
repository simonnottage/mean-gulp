/**
 * Define the main module.
 */
angular.module('mainApp', [
    'ui.router',
    'modules.homeApp'
]).config(['$locationProvider', '$urlRouterProvider', function ($locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode({
        enabled: true, requireBase: false
    });
    $urlRouterProvider.otherwise('/');
}]);