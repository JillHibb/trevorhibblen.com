;(function(){

  'use strict';

  angular
    .module('trevor')
    .config(['$routeProvider', routes]);

  function routes($routeProvider){
    $routeProvider
      .when('/background',{
        templateUrl:getUrl('skills')
      })
      .when('/skills',{
        templateUrl:getUrl('skills')
      });

    function getUrl(path){
      return '/pages/' + path + '/' + path + '.html';
    }
  }

}());
