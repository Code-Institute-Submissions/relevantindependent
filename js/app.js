angular.module("RelevantIndependent", ["ngRoute", "RouteControllers", "UserService", "angular-storage"]);
 
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
    	controller: "FirstReviewsController"
    })
    .when("/reviews/motherrussiableeds", {
        templateUrl: "templates/reviews_mrb.html",
        controller: "ReviewsController"
    })
    .when("/reviews/abzu", {
        templateUrl: "templates/reviews_abzu.html",
        controller: "ReviewsController"
    })
    .when("/reviews/overcooked", {
        templateUrl: "templates/reviews_overcooked.html",
        controller: "ReviewsController"
    })
    .when("/reviews/octodad", {
        templateUrl: "templates/reviews_octodad.html",
        controller: "ReviewsController"
    })
});