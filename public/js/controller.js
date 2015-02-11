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

    .when('/companies', {
        templateUrl: 'companies.html',
        controller: 'mainController'
    })

    .when('/map', {
        templateUrl: 'map.html',
        controller: 'mainController'
    })
    //===================================================

    $locationProvider.html5Mode(true);

});

function blur() {
    $('.shouldBlur').blur();
}

app.controller('mainController', function($scope) {

    $scope.$on('$routeChangeSuccess', function(next, current) {
        blur();
    });



});