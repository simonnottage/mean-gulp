/**
 * Define the controllers.
 */
homeApp.controller('HomeController', ['$scope', 'UserService', function ($scope, UserService) {
    UserService.all().then(function (data) {
        $scope.agreements = data;
    })
}]);