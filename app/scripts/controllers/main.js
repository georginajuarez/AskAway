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

    //SHOULD CHANGE IMAGE AND RESPONSE WHEN NEW INQUIRY IS ANSWERED: MAY NEED TO SWITCH FOR .RELOAD()
    /*$scope.refreshTellMe = function(){
        $scope.tellMe = tellMe.query({
            image: $scope.image,
            answer: $scope.answer
        });
    };
    */

    //RELOADS PAGE WHEN CLICK TELL ME! BUTTON -- NEED TO FIX CONTROLLER THIS IS A TEMPORARY SOLUTION
    $scope.reloadPage = function(){window.location.reload();};


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
