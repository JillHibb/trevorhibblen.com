;(function(){

  'use strict';

  require('./contact.less');
  const contactHtml = require('./contact.html');

  angular
    .module('trevor')
    .config(['$routeProvider', routes]);

  function routes($routeProvider){
    $routeProvider
      .when('/contact',{
        template: contactHtml
      });
  }

}());
