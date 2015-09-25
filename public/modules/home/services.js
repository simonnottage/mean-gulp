homeApp.factory('UserService', ['$http', function ($http) {
    return {
        all: function () {
            return $http.get('/api/agreements')
                .success(function (data) {
                    return data;
                });
        }
    }
}]);