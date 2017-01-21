angular.module("RelevantIndependent", ["ngRoute", "RouteControllers", "UserService"]);
 
angular.module("RelevantIndependent").config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when("/", {
        templateUrl: "templates/home.html",
        controller: "HomeController"
    })
    .when("/accounts/register", {
        templateUrl: "templates/register.html",
        controller: "RegisterController"
    })
    .when("/reviews", {
    	templateUrl: "templates/reviews.html",
    	controller: "ReviewsController"
    })
});