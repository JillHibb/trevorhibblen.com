;(function(){

  'use strict';

  angular
    .module('trevor')
    .config(['$routeProvider', routes]);

  function routes($routeProvider){
    $routeProvider
      .when('/wedding',{
        templateUrl:getUrl('wedding')
      })
      .when('/iceland',{
        templateUrl:getUrl('wedding')
      });

    function getUrl(path){
      return '/pages/' + path + '/' + path + '.html';
    }
  }

}());
