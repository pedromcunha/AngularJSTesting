'use strict';

/**
 * @ngdoc function
 * @name angularJstestingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJstestingApp
 */
angular.module('angularJstestingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
