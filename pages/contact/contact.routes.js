;(function(){

  'use strict';

  angular
    .module('trevor')
    .config(['$routeProvider', routes]);

  function routes($routeProvider){
    $routeProvider
      .when('/contact',{
        templateUrl:getUrl('contact')
      });

    function getUrl(path){
      return '/pages/' + path + '/' + path + '.html';
    }
  }

}());
