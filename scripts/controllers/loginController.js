/**
 * Created by richard on 8/24/16.
 */
'use strict'

angular.module('CmasR')
.controller('LoginController', ['$scope','$location','$http','$rootScope',function($scope,$location,$http,$rootScope){

    if($rootScope.loggedIn=="true")
    {
        $location.path('/dashboard');
    }

    $scope.login = function() {
        if ($rootScope.loggedIn == "true") {
            console.log("The user is logged in");
        } else {

        if ($scope.loginForm.$valid) {
            console.log('sending request to server');
            var username = $scope.user.email;
            var password = $scope.user.password;
            var finalUsername = username.replace("@admin.com", "");
            //console.log(username+" "+password)

            var dataSent = {"username": finalUsername, "password": password};
            /*$http.get('scripts/PHP/login.php')
             .success(function(data)
             {
             console.log(data);
             });
             /*********************************************
             * Whole of this side is just a test run
             */
            /*
             if(username=="admin@admin.com" && password=="a")
             {
             $location.path('/dashboard');
             }*/
            $scope.url = "scripts/PHP/login.php";

            $http.post($scope.url, dataSent)
                .success(function (data, status, headers, config) {
                    //console.log("Data retrieved is "+data);
                    console.log(data);

                    $scope.status = status;
                    $scope.data = data;
                    //$scope.result = JSON.parse(data);
                    $scope.result = data;
                    //console.log($scope.result.picture);

                    //temporary condition for login
                    if ($scope.result.level >= 1) {
                        $rootScope.username = finalUsername;
                        $rootScope.loggedIn = "true";
                        $rootScope.picture = $scope.result.picture_id;
                        $rootScope.firstname = $scope.result.firstname;
                        $rootScope.lastname = $scope.result.lastname;
                        //console.log("Picture id : "+$rootScope.picture);
                        $rootScope.level = $scope.result.level;
                        $location.path('/dashboard');
                    }
                })
                .error(function (data, status, headers, config) {
                    console.log('error');
                })
        }
    }
    }
}]);