var app = angular.module('SanFran', ['ngRoute']);


app.config(function($routeProvider, $locationProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'main.html',
        controller: 'mainController'
    })

    .when('/blog', {
        templateUrl: 'blog.html',
        controller: 'mainController'
    })
    //===================================================

    $locationProvider.html5Mode(true);

});

app.controller('mainController', function($scope) {





});