;(function(){

  'use strict';

  angular.module('trevor',['ngRoute','ngAnimate']);
  angular.module('trevor').config(['$routeProvider', routes]);

  function routes($routeProvider){
    $routeProvider
      .when('/',{
        templateUrl:getUrl('title')
      })
      .when('/contact',{
        templateUrl:getUrl('contact')
      })
      .when('/background',{
        templateUrl:getUrl('skills')
      })
      .when('/about',{
        templateUrl:getUrl('about')
      })
      .when('/iceland',{
        templateUrl:getUrl('wedding')
      })
      .otherwise({
        redirectTo:'/'
      });
  }

}());

function getUrl(path){
  return '/pages/' + path + '/' + path + '.html';
}
