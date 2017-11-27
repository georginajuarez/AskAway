'use strict';

/**
 * @ngdoc function
 * @name askAwayApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the askAwayApp
 */
angular.module('askAwayApp')
  .controller('MainCtrl', function ($scope, tellMe) {
    $scope.tellMe = tellMe.query();

  });

//SHOULD GIVE ACCESS TO {{tellMe}} VARIABLE IN VIEWS DIRECTORY

/*
angular.module('askAwayApp')
  .controller('MainCtrl', function ($scope, tellMe) {
    $scope.tellMe = tellMe.get();

$scope.refreshCurrent = function(){
  $scope.tellMe = tellMe.get({
    force: $scope.force
  });
};
*/
