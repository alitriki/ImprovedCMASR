'use strict';

angular.module('CmasR',['ngRoute','ngAnimate','ui.router','ui.bootstrap','angularModalService'])
    .config([
        '$routeProvider',
        '$locationProvider',
        '$urlRouterProvider',
        '$stateProvider',
        function ($routeProvider,$locationProvider,$urlRouterProvider,$stateProvider) {
            $routeProvider.when('/dashboard',{
                templateUrl:'partials/navigation_bar.html',
                controller: 'MainController',
                controllerAs: 'MC'
            })
                .when('/about',{
                    templateUrl:'views/about.html'

                })
                .when('/contact',{
                    templateUrl:'views/contact.html'
                })/*
                .when('/webmonitors',{
                    templateUrl: 'views/dashboard2.html'
                })*/
                /*.when('/webmonitors',{
                    templateUrl:'partials/navigation_bar.html'
                })*/
                .when('/',{
                    templateUrl: 'views/login.html',
                    controller: 'LoginController',
                    controllerAs: 'loginControl'
                })
                .otherwise({
                    redirectTo: '/'
                });
            /*$urlRouterProvider
             .when("/about","views/about.html")
             .otherwise('/');*/
            $stateProvider
                .state('about',
                    {
                        url: '/about',
                        templateUrl: 'views/about.html'
                    })
                .state('default',
                    {
                        url: '/monitorSite',
                        templateUrl: 'views/monitorSite.html'
                    })
                .state('webmonitors',
                    {
                        url: '/webMonitors',
                        templateUrl: 'views/websites.html'
                    })
                .state('billingmonitors',
                    {
                        url: '/billingMonitors',
                        templateUrl: 'views/monitoring_billing.html',
                        controller: 'BillingController',
                        controllerAs: 'BillC'
                    })
                .state('smscmonitors',
                    {
                        url: '/smscMonitors',
                        templateUrl: 'views/monitoring_smsc.html',
                        controller: 'SMSCController',
                        controllerAs: 'SmsC'
                    });
            $locationProvider.html5Mode(true);

        }])
    .run(function ($rootScope,$timeout,$http) {
        $rootScope.username = "nothing";
        $rootScope.loggedIn = "false";
        $rootScope.level = 0;
        $rootScope.picture = 0;
        $rootScope.urls = {};
        $rootScope.responses={};
        $rootScope.websites = [];
      $rootScope.loadSites = function()
        {
            var sitesUrl = "scripts/PHP/getSites.php";

            $http.post(sitesUrl)
                .success(function(data,status){
                    $rootScope.websites = data;
                    //console.log($rootScope.websites);

                    for(var i=0; i<$rootScope.websites.length; i++)
                    {
                        console.log($rootScope.websites[i]);
                    }
                })
                .error(function(data,status){
                    console.log('Error');
                })
        };

        $timeout(function(){
            $rootScope.loadSites();
        },100);
    });