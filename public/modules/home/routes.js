/**
 * Configure the module routes.
 */
homeApp.config(['$stateProvider', 'baseUrl', function ($stateProvider, baseUrl) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: baseUrl + '/views/home.html',
        controller: 'HomeController'
    });
}]);