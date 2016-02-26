;(function(){

  'use strict';

  require('./about.less');
  const aboutHtml = require('./about.html');

  angular
    .module('trevor')
    .config(['$routeProvider', routes]);

  function routes($routeProvider){
    $routeProvider
      .when('/about',{
        template: aboutHtml
      });
  }

}());
