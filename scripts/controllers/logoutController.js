/**
 * Created by richard on 8/29/16.
 */
'use strict'

angular.module('CmasR')
.controller('UserOptions',['$scope','$rootScope','$location',function($scope,$rootScope,$location)
{
    $scope.logout = function()
    {
        $rootScope.username = "nothing";
        $rootScope.loggedIn = "false";
        $rootScope.level = 0;
        $rootScope.picture_id = 0;
        console.log("User logged out");
        $location.path('/');
    }

}]);