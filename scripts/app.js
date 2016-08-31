'use strict';

angular.module('CmasR',['ngRoute','ngAnimate','ui.router'])
.config([
    '$routeProvider',
    '$locationProvider',
    '$urlRouterProvider',
    '$stateProvider',
    function ($routeProvider,$locationProvider,$urlRouterProvider,$stateProvider) {
    $routeProvider
        .when('/dashboard',{
         templateUrl:'partials/navigation_bar.html',
         controller: 'MainController',
        controllerAs: 'MC'
        })
        .when('/about',{
            templateUrl:'views/about.html'

        })
        .when('/contact',{
            templateUrl:'views/contact.html'
        })
        /*.when('/webmonitors',{
            templateUrl: 'views/websites.html'
        })*/
        .when('/',{
            templateUrl: 'views/login.html',
            controller: 'LoginController',
            controllerAs: 'loginControl'
        })
        .otherwise({
            redirectTo: '/'
        });
        $urlRouterProvider
            .otherwise('/');
        $stateProvider
            /*.state('about',
                {
                  url: '/about',
                    templateUrl: 'views/about.html'
                })*/
            .state('dashboard',
                {
                    url: '/dashboard',
                    templateUrl: 'views/monitorSite.html'
                })
            .state('webmonitors',
                {
                    url: '/webmonitors',
                    templateUrl: 'views/websites.html',
                    controller: 'MainSiteController',
                    controllerAs: 'MainSC'
                })
            .state('billmonitors',
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
.run(function ($rootScope) {
    $rootScope.username = "nothing";
    $rootScope.loggedIn = "false";
    $rootScope.level = 0;
    $rootScope.picture = 0;
    $rootScope.urls = {};
    $rootScope.responses={};
    $rootScope.firstname = "";
    $rootScope.lastname = "";
});