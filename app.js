;(function(){

  'use strict';

  angular.module('trevor',['ngRoute','ngAnimate']);
  angular.module('trevor').config(['$routeProvider', routes]);

  function routes($routeProvider){
    $routeProvider
      .otherwise({
        redirectTo:'/'
      });
  }

}());

function getUrl(path){
  return '/pages/' + path + '/' + path + '.html';
}
