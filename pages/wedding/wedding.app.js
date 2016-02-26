;(function(){

  'use strict';

  require('./wedding.less');
  const weddingHtml = require('./wedding.html');

  angular
    .module('trevor')
    .config(['$routeProvider', routes]);

  function routes($routeProvider){
    $routeProvider
      .when('/wedding',{
        template: weddingHtml
      })
      .when('/iceland',{
        template: weddingHtml
      });
  }

}());
