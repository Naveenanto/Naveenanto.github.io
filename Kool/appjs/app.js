/**
 * Created by indrapradap on 18/09/14.
 */

var app = angular.module('myApp',['myAppcontrollers','myAppServices','myAppDirectives','ngRoute']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when("/", {templateUrl: "partials/home.html"});
        $routeProvider.when("/side", {templateUrl: "partials/events.html", controller: "events"});
        $routeProvider.when("/events", {templateUrl: "partials/sidemenu.html", controller: "eventsMenu"});
        $routeProvider.when("/events/:id", {templateUrl: "partials/sidemenu.html", controller: "eventsMenu"});
        $routeProvider.otherwise({redirectTo: '/'});
    }]);


