/**
 * Created by indrapradap on 18/09/14.
 */

var app = angular.module('myApp',['myAppcontrollers','myAppServices','myAppDirectives','ngRoute']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when("/", {templateUrl: "partials/home.html"});
        $routeProvider.when("/side", {templateUrl: "partials/events.html", controller: "events"});
        $routeProvider.when("/events", {templateUrl: "partials/events.html", controller: "eventsMenu"});
        $routeProvider.when("/workshops",{templateUrl: "partials/workshops.html", controller: "workshopsMenu"});
        $routeProvider.when("/contacts", {templateUrl: "partials/contact.html", controller: "contact"});
        $routeProvider.otherwise({redirectTo: '/'});
    }]);


