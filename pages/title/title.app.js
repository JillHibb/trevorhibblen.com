;(function(){

  'use strict';

  const html = require('./title.html');
  require('./title.less');

  angular
    .module('trevor')
    .config(['$routeProvider', routes]);

  function routes($routeProvider){
    $routeProvider
      .when('/',{
        template: html
      })
      .when('/title',{
        template: html
      })
      .when('/hi',{
        template: html
      });
  }

}());
