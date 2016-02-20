;(function(){

  'use strict';

  angular
    .module('trevor')
    .config(['$routeProvider', routes]);

  function routes($routeProvider){
    $routeProvider
      .when('/about',{
        templateUrl:getUrl('about')
      });

    function getUrl(path){
      return '/pages/' + path + '/' + path + '.html';
    }
  }

}());
