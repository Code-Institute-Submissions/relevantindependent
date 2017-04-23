angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.relindtitle = "Welcome to Relevant Independent!";
    })
        .controller('RegisterController', function($scope, UserAPIService) {
 
        $scope.registrationUser = {};
        var URL = "https://morning-castle-91468.herokuapp.com/";
 
        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.email = $scope.user.email;
                $scope.registrationUser.password = $scope.user.password;

                UserAPIService.registerUser(URL + "accounts/register/", $scope.registrationUser).then(function(results) {
                    $scope.data = results.data;
                    alert("Hurrah! You are now registered, welcome to the gang.");
                }).catch(function(err) {
                    alert("Uh oh....Something's not right.");
                    console.log(err);
                });
            }
 
            console.log($scope.registrationUser.email + " " + $scope.registrationUser.password);
        }
    });