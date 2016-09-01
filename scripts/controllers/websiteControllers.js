/**
 * Created by richard on 8/25/16.
 */
'use strict';

angular.module('CmasR')
.controller('AirtelMoneyMarketCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
   // console.log('AirtelMoneyMarket sending request to php');
    //var username = $scope.user.email;
    //var password = $scope.user.password;
    var website = "http://www.airtelmoneymarket.com";
    $rootScope.urls['0'] = website;
    //console.log($rootScope.urls);
    //console.log(website);

    /*********************************************
     * Whole of this side is just a test run
     */
    /*if(username=="admin@admin.com" && password=="a")
     {
     $location.path('/dashboard');
     }*/
    /*$scope.url = 'scripts/PHP/monitorSite.php';
    //console.log($scope.url);
    //dataSent = {'urlsite': website};

    $http.post($scope.url, {"urlsite": website})
        .success(function(data, status,headers,config) {
            //console.log("Data retrieved is "+data);

            $scope.status = status;
            $scope.data = data;
            $scope.result = data;
        })
        .error(function(data,status,headers,config){
            console.log('error');
        })*/
    }
])
.controller('ApiRancardMobilityCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope) {
   // console.log('ApiRancardMobility sending request to php');
    //var username = $scope.user.email;
    //var password = $scope.user.password;
    var website = "http://API.RANCARDMOBILITY.COM";
    $rootScope.urls['1'] = website;
    //console.log($rootScope.urls);
    //console.log(website);

    /*********************************************
     * Whole of this side is just a test run
     */
    /*if(username=="admin@admin.com" && password=="a")
     {
     $location.path('/dashboard');
     }*/
    /*$scope.url = 'scripts/PHP/monitorSite.php';
    //console.log($scope.url);
    //console.log("user is "+userData.loggedIn);
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
        })*/
}])
.controller('ShopWithRendezvousCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
            //console.log('SWR sending request to php');
            //var username = $scope.user.email;
            //var password = $scope.user.password;
            var website = "http://SHOPWITHRENDEZVOUS.COM";
            $rootScope.urls['2'] = website;
            //console.log($rootScope.urls);
            //console.log(website);

            /*********************************************
             * Whole of this side is just a test run
             */
            /*if(username=="admin@admin.com" && password=="a")
             {
             $location.path('/dashboard');
             }*/
            /*$scope.url = 'scripts/PHP/monitorSite.php';
            //console.log($scope.url);
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
                })*/
}]).controller('MyRancardMobilityCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
        //console.log('MyRancardMobility sending request to php');
        //var username = $scope.user.email;
        //var password = $scope.user.password;
        var website = "http://MY.RANCARDMOBILITY.COM";
        $rootScope.urls['3'] = website;
        //console.log($rootScope.urls);
        //console.log(website);

        /*********************************************
         * Whole of this side is just a test run
         */
        /*if(username=="admin@admin.com" && password=="a")
         {
         $location.path('/dashboard');
         }*/
        /*$scope.url = 'scripts/PHP/monitorSite.php';
        //console.log($scope.url);
        //dataSent = {'urlsite': website};
        // console.log("user is "+userData.loggedIn);

        $http.post($scope.url, {"urlsite": website})
            .success(function(data, status,headers,config) {
                console.log("Data retrieved is "+data);
                $scope.status = status;
                $scope.data = data;
                $scope.result = data;
            })
            .error(function(data,status,headers,config){
                console.log('error');
            })*/
    }])
    .controller('RendezvousCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
        //console.log('Rendezvous sending request to php');
        //var username = $scope.user.email;
        //var password = $scope.user.password;
        var website = "http://rendezvous.com";
        $rootScope.urls['4'] = website;
        //console.log($rootScope.urls);
        //console.log(website);

        /*********************************************
         * Whole of this side is just a test run
         */
        /*if(username=="admin@admin.com" && password=="a")
         {
         $location.path('/dashboard');
         }*/
        /*$scope.url = 'scripts/PHP/monitorSite.php';
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
            })*/
    }])
    .controller('VodafoneLiveCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
        //console.log('VodafoneLive sending request to php');
        //var username = $scope.user.email;
        //var password = $scope.user.password;
        var website = "http://vodafonelive.com";
        $rootScope.urls['5'] = website;
        //console.log($rootScope.urls);
        //console.log(website);

        /*********************************************
         * Whole of this side is just a test run
         */
        /*if(username=="admin@admin.com" && password=="a")
         {
         $location.path('/dashboard');
         }*/
        /*$scope.url = 'scripts/PHP/monitorSite.php';
        //console.log($scope.url);
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
            })*/
    }])
    .controller('BooksNgAirtelLiveCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
        //console.log('BooksNgAirtel sending request to php');
        //var username = $scope.user.email;
        //var password = $scope.user.password;
        var website = "http://BOOKS.NG.AIRTELLIVE.COM";
        $rootScope.urls['6'] = website;
        //console.log($rootScope.urls);
        //console.log(website);

        /*********************************************
         * Whole of this side is just a test run
         */
        /*if(username=="admin@admin.com" && password=="a")
         {
         $location.path('/dashboard');
         }*/
        /*$scope.url = 'scripts/PHP/monitorSite.php';
        //console.log($scope.url);
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
            })*/
    }])
    .controller('TicketsNgAirtelLiveCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
        //console.log('TicketsNgAirtel sending request to php');
        //var username = $scope.user.email;
        //var password = $scope.user.password;
        var website = "http://tickets.ng.airtellive.com";
        $rootScope.urls['7'] = website;
        //console.log($rootScope.urls);
        //console.log(website);

        /*********************************************
         * Whole of this side is just a test run
         */
        /*if(username=="admin@admin.com" && password=="a")
         {
         $location.path('/dashboard');
         }*/
        /*$scope.url = 'scripts/PHP/monitorSite.php';
        //console.log($scope.url);
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
            })*/
    }])
    .controller('MyRancardCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
        //console.log('MyRancard sending request to php');
        //var username = $scope.user.email;
        //var password = $scope.user.password;
        var website = "http://my.rancard.com";
        $rootScope.urls['8'] = website;
        //console.log($rootScope.urls);
        //console.log(website);

        /*********************************************
         * Whole of this side is just a test run
         */
        /*if(username=="admin@admin.com" && password=="a")
         {
         $location.path('/dashboard');
         }*/
        /*$scope.url = 'scripts/PHP/monitorSite.php';
       // console.log($scope.url);
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
            })*/
    }])
    .controller('ContentClassificationBBCCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
        //console.log('ContentClassification sending request to php');
        //var username = $scope.user.email;
        //var password = $scope.user.password;
        var website = "http://localhost";
        $rootScope.urls['9'] = website;
        //console.log($rootScope.urls);
        //console.log(website);

        /*********************************************
         * Whole of this side is just a test run
         */
        /*if(username=="admin@admin.com" && password=="a")
         {
         $location.path('/dashboard');
         }*/
        /*$scope.url = 'scripts/PHP/monitorSite.php';
        //console.log($scope.url);
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
            })*/
    }])
    .controller('MMarathonRancardMobilityCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
        //console.log('MMarathonRancardMobility sending request to php');
        //var username = $scope.user.email;
        //var password = $scope.user.password;
        var website = "http://mmarathon.rancardmobility.com";
        $rootScope.urls['10'] = website;
        //console.log($rootScope.urls);
        //console.log(website);

        /*********************************************
         * Whole of this side is just a test run
         */
        /*if(username=="admin@admin.com" && password=="a")
         {
         $location.path('/dashboard');
         }*/
        /*$scope.url = 'scripts/PHP/monitorSite.php';
        //console.log($scope.url);
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
            })*/
    }])
    .controller('MMarathonAdminCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
        //console.log('RancardMobilityAdmin sending request to php');
        //var username = $scope.user.email;
        //var password = $scope.user.password;
        var website = "http://mmarathon-admin.rancardmobility.com";
        $rootScope.urls['11'] = website;
        //console.log($rootScope.urls);
        //console.log(website);

        /*********************************************
         * Whole of this side is just a test run
         */
        /*if(username=="admin@admin.com" && password=="a")
         {
         $location.path('/dashboard');
         }*/
        /*$scope.url = 'scripts/PHP/monitorSite.php';
       // console.log($scope.url);
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
            })*/
    }])
    .controller('GraphDBCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
        //console.log('GraphDB sending request to php');
        //var username = $scope.user.email;
        //var password = $scope.user.password;
        var website = " http://192.168.1.234:7474";
        $rootScope.urls['12'] = website;
        //console.log($rootScope.urls);
        //console.log(website);

        /*********************************************
         * Whole of this side is just a test run
         */
        /*if(username=="admin@admin.com" && password=="a")
         {
         $location.path('/dashboard');
         }*/
        /*$scope.url = 'scripts/PHP/monitorSite.php';
       // console.log($scope.url);
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
            })*/
    }])
    .controller('MyJoyOnlineCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
        //console.log('MyJoyOnline sending request to php');
        //var username = $scope.user.email;
        //var password = $scope.user.password;
        var website = "http://myjoyonline.com";
        $rootScope.urls['13'] = website;
        //console.log($rootScope.urls);
        //console.log(website);

        /*********************************************
         * Whole of this side is just a test run
         */
        /*if(username=="admin@admin.com" && password=="a")
         {
         $location.path('/dashboard');
         }*/
        /*$scope.url = 'scripts/PHP/monitorSite.php';
        //console.log($scope.url);
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
            })*/
    }])
    .controller('AddWebsiteCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope)
    {
        console.log("Add Website Controller Active");
        //var newWebsiteName = $scope.newSite;
        $scope.placeholder_url = 'www.rancardsolutions.com';
        $scope.placeholder_title = "Rancard Mobility Site";

        $scope.addSite = function()
        {
            console.log("Site to be added"+$scope.site.name);
            $scope.url = "scripts/PHP/websites.php";

            var temp1 = $scope.site.url; var temp2 = $scope.site.title;
            var dataSent = {"url":temp1,"sitetitle": temp2};

            //console.log("Data to be sent over : "+dataSent);

            $http.post($scope.url,dataSent)
                .success(function (data, status, headers, config) {
                    //console.log("Data retrieved is "+data);
                    console.log("After adding site"+data);

                    $scope.status = status;
                    $scope.result = data;
                    console.log($scope.result);

                })
                .error(function (data, status, headers, config) {
                    console.log('error');
                })
        }
    }])
    .controller('MainSiteController',['$scope',
        '$http','$rootScope','$timeout','$interval'
        ,function($scope,$http,$rootScope,$timeout,$interval){

        $scope.checkStatus = function()
        {
            //console.log($rootScope.urls);
            console.log("Now checking the statuses");
            $scope.url = 'scripts/PHP/monitorSite.php';
            //console.log($scope.url);
            //dataSent = {'urlsite': website};

            $http.post($scope.url,$rootScope.urls)
                .success(function(data, status,headers,config) {
                    //console.log("Data retrieved is "+data);
                    $scope.status = status;
                    $scope.data = data;
                    //console.log(data.substring(13,data.length-3));

                    //split them by commas
                    var commaSplit = data.substring(13,data.length-3).split(',');
                    //console.log(commaSplit);
                    var i = 0;
                    for (; i<commaSplit.length; i++)
                    {
                        var val = commaSplit[i].substring(commaSplit[i].indexOf(':')+1,commaSplit[i].length);
                        //console.log(val);
                        $rootScope.responses[i.toString()] = val.toString();
                    }
                    //$rootScope.responses = JSON.parse(data.substring(12,data.length-2));
                    //console.log($rootScope.responses['9']);
                    //$scope.result = "waiting...";//data;
                })
                .error(function(data,status,headers,config){
                    console.log('error');
                });
        };


        $scope.colorCode = function(index)
        {
            /*//console.log($rootScope.responses.valueOf(7));
            for(var key in $rootScope.responses)
            {
                console.log(key);
            }*/
            var value = $rootScope.responses[index];
            switch(value)
            {
                case "0":
                    return "Disaster";
                case "200":
                    return "Success";
                case "204":
                    return "No Content";
                case "205":
                    return "Reset Content";
                case "301":
                    return "Moved Permanently";
                case "302":
                    return "Found";
                case "307":
                    return "Temporary Redirect";
                case "400":
                    return "Bad request";
                case "401":
                    return "Unauthorized";
                case "403":
                    return "Forbidden";
                case "404":
                    return "Not Found";
                case "408":
                    return "Request Timeout";
                default:
                    return "Loading...";
            }
            //var terminals = JSON.parse($rootScope.responses);
            //console.log(terminals);

            /*var i=0;
            for(; i<14; i++)
            {
                console.log($rootScope.responses);
            }*/


        };


            $timeout(function (){
                $scope.checkStatus();
            },500);

        $interval(function (){
         $scope.checkStatus();
         },30000);

        $scope.getColor = function(index)
        {
            var value = $rootScope.responses[index];
            //console.log("The value is "+value);

            switch(value)
            {
                case "200":
                    return {"background-color":"#4EF84E", "color":"red"};
                case "204":
                    return {"background-color":"#EE1C1C","color":"white"};
                case "205":
                    return {"background-color":"yellow", "color": "black"};
                case "301":
                    return {"background-color":"#EE1C1C","color":"white"};
                case "302":
                    return {"background-color":"yellow", "color": "black"};
                case "307":
                    return {"background-color":"yellow", "color": "black"};
                case "400":
                    return {"background-color":"#EE1C1C","color":"white"};
                case "401":
                    return {"background-color":"#EE1C1C","color":"white"};
                case "403":
                    return {"background-color":"#EE1C1C","color":"white"};
                case "404":
                    return {"background-color":"#EE1C1C","color":"white"};
                case "408":
                    return {"background-color":"#EE1C1C","color":"white"};

                default:
                    return {"background-color":"gray", "color":"black"};
            }

        }

    }]);/*
    .controller('ColorCtrl',[
        '$scope','$rootScope',function($scope,$rootScope)
        {
           $scope.getColor = function(index)
           {
               var value = $rootScope.responses[index];
               console.log("The value is "+value);
               return {"background-color": "red"};
           }
        }
    ]);*/

