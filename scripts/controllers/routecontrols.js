'use strict';

angular.module('CmasR')
.controller('SiteMonitorController',['$scope','$http',function($scope,$http){
    /*$scope.url = 'scripts/PHP/monitorSite.php';
    console.log($scope.url)
    $scope.monitorSite = function(isValid)
    {

    }*/
    $scope.monitorSite = function() {
        if ($scope.urlMonitorForm.$valid) {
            console.log('sending request to php');
            //var username = $scope.user.email;
            //var password = $scope.user.password;
            var website = $scope.webUrl;
            console.log(website);

            /*********************************************
             * Whole of this side is just a test run
             */
            /*if(username=="admin@admin.com" && password=="a")
             {
             $location.path('/dashboard');
             }*/
            $scope.url = 'scripts/PHP/monitorSite.php';
            console.log($scope.url);
            //dataSent = {'urlsite': website};

            $http.post($scope.url, {"urlsite": website})
                .success(function(data, status,headers,config) {
                console.log("Data retrieved is "+data);
                $scope.status = status;
                $scope.data = data;
                $scope.result = data;
            })
                .error(function(data,status,headers,config){
                    console.log('error');
                })
        }
    }
}]
)
.controller('DashboardController',function(){

})