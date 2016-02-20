;(function(){

  'use strict';

  angular
    .module('trevor')
    .config(['$routeProvider', routes]);

  function routes($routeProvider){
    $routeProvider
      .when('/',{
        templateUrl:getUrl('title')
      })
      .when('/title',{
        templateUrl:getUrl('title')
      })
      .when('/hi',{
        templateUrl:getUrl('title')
      });

    function getUrl(path){
      return '/pages/' + path + '/' + path + '.html';
    }
  }

}());
