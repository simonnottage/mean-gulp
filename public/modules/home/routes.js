/**
 * Configure the module routes.
 */
homeApp.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        views: {
            '': {templateUrl: 'modules/home/views/home.html'},
            'nav@home': {templateUrl: 'modules/navigation.html'}
        }
    });
}]);