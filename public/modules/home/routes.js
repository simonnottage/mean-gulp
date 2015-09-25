/**
 * Configure the module routes.
 */
homeApp.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'modules/home/views/home.html',
        controller: 'HomeController'
    });
}]);