'use strict';

/* Controllers */


angular.module('myApp.controllers', []).
  controller('NavCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.$location = $location;
  }])
  .controller('MyCtrl1', [function() {
  }])
  .controller('MyCtrl2', [function() {
  }])
  .controller('MyCtrl3', [function() {
  }])
  .controller('MyCtrl4', [function() {
  }])
  .controller('MyCtrl5', [function() {
  }])
  .controller('MyCtrl6', [function() {
  }])
  .controller('MyCtrl7', [function() {
  }]);