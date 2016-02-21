;(function(){

  'use strict';

  const html = require('./contact.html');
  require('./contact.less');

  angular
    .module('trevor')
    .config(['$routeProvider', routes]);

  function routes($routeProvider){
    $routeProvider
      .when('/contact',{
        template: html
      });
  }

}());
