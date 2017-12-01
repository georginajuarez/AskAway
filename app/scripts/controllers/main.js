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

    //SHOULD CHANGE IMAGE AND RESPONSE WHEN NEW INQUIRY IS ANSWERED
    $scope.refreshCurrent = function(){
        $scope.tellMe = tellMe.query({
            query: $scope.query
        });
    };

  });

//SHOULD GIVE ACCESS TO {{tellMe}} VARIABLE IN VIEWS DIRECTORY

/*
DELETE WHEN DONE:
angular.module('askAwayApp')
  .controller('MainCtrl', function ($scope, tellMe) {
    $scope.tellMe = tellMe.get();

$scope.refreshCurrent = function(){
  $scope.tellMe = tellMe.get({
    force: $scope.force
  });
};
*/
