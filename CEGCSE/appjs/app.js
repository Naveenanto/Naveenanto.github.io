/**
 * Created by indrapradap on 18/09/14.
 */

var app = angular.module('myApp',['myAppcontrollers','ngRoute']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when("/", {templateUrl: "partials/home.html"});
        $routeProvider.when("/experts", {templateUrl: "partials/experts.html", controller: "driverController"});
        $routeProvider.when("/placements", {templateUrl: "partials/placements.html", controller: "placementDetails"});
        $routeProvider.when("/students", {templateUrl: "partials/students.html", controller: "placementDetails"});
        $routeProvider.when("/placements/:company", {templateUrl: "partials/placements.html", controller: "placementDetails"});
        $routeProvider.when("/students/:id", {templateUrl: "partials/profile.html", controller: "placementDetails"});
        $routeProvider.otherwise({redirectTo: '/'});
    }]);