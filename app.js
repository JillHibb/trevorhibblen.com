;(function(){

  'use strict';

  angular.module('trevor',['ngRoute','ngAnimate']);
  angular.module('trevor').config(['$routeProvider', routes]);

  function routes($routeProvider){
    $routeProvider
      .when('/',{
        templateUrl:'/pages/title/title.html'
      })
      .when('/contact',{
        templateUrl:'/pages/contact/contact.html'
      })
      .when('/background',{
        templateUrl:'/pages/skills/skills.html'
      })
      .when('/about',{
        templateUrl:'/pages/about/about.html'
      })
      .when('/iceland',{
        templateUrl:'/pages/wedding/wedding.html'
      })
      .otherwise({
        redirectTo:'/'
      });
  }

}());
