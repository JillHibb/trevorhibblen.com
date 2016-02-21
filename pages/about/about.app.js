;(function(){

  'use strict';

  const html = require('./about.html');
  require('./about.less');

  angular
    .module('trevor')
    .config(['$routeProvider', routes]);

  function routes($routeProvider){
    $routeProvider
      .when('/about',{
        template: html
      });
  }

}());
