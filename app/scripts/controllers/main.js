(function() {
	'use strict';

/**
 * @ngdoc function
 * @name angularJstestingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJstestingApp
 */
var module = angular.module('angularJstestingApp');
  
  module.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.addNumbers = function(numberOne, numberTwo) {
    	$scope.result =  numberOne + numberTwo;
    };

  });

})();