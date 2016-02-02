;(function(){

  'use strict';

  angular.module('trevor',['ngRoute','ngAnimate']);
  angular.module('trevor').config(['$routeProvider', routes]);

  function routes($routeProvider){
    $routeProvider
      .when('/',{
        templateUrl:'views/title.html'
      })
      .when('/contact',{
        templateUrl:'/views/contact.html'
      })
      .when('/background',{
        templateUrl:'/views/skills.html'
      })
      .when('/about',{
        templateUrl:'/views/about.html'
      })
      .when('/iceland',{
        templateUrl:'/views/wedding.html'
      })
      .otherwise({
        redirectTo:'/'
      });
  }

}());
