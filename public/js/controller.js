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

$('#toHide').hide();

function blur() {
    $('.shouldBlur').blur();
}

var play = false;

function toggleTube() {
    console.log('toggled!');
    if (!play) {
        $('#playbutton').attr('src', 'img/stop.svg');
        $('#youtube').attr("src", "https://www.youtube.com/embed/NEpqlgAlvA8?enablejsapi=1&autoplay=1");
    } else {
        $('#playbutton').attr('src', 'img/play.svg');
        $('#youtube').attr("src", "https://www.youtube.com/embed/NEpqlgAlvA8?enablejsapi=1");
    }
    play = !play;
}


app.controller('mainController', function($scope) {

    $scope.$on('$routeChangeSuccess', function(next, current) {
        blur();
    });




});