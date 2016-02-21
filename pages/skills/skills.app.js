;(function(){

  'use strict';

  const html = require('./skills.html');
  require('./skills.less');
  require('./skills.controller');

  angular
    .module('trevor')
    .config(['$routeProvider', routes]);

  function routes($routeProvider){
    $routeProvider
      .when('/background',{
        template: html
      })
      .when('/skills',{
        template: html
      });
  }

}());
