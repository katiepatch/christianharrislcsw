'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'MyCtrl1'});
  $routeProvider.when('/psychotherapy', {templateUrl: 'partials/psychotherapy.html', controller: 'MyCtrl2'});
  $routeProvider.when('/families', {templateUrl: 'partials/families.html', controller: 'MyCtrl3'});
  $routeProvider.when('/couples', {templateUrl: 'partials/couples.html', controller: 'MyCtrl4'});
  $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'MyCtrl5'});
  $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'MyCtrl6'});
  $routeProvider.when('/resources', {templateUrl: 'partials/resources.html', controller: 'MyCtrl7'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
