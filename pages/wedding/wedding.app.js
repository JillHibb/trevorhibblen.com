;(function(){

  'use strict';

  const html = require('./wedding.html');
  require('./wedding.less');

  angular
    .module('trevor')
    .config(['$routeProvider', routes]);

  function routes($routeProvider){
    $routeProvider
      .when('/wedding',{
        template: html
      })
      .when('/iceland',{
        template: html
      });
  }

}());
