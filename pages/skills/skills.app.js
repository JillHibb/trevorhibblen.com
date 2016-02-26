;(function(){

  'use strict';

  require('./skills.less');
  const skillsHtml = require('./skills.html');
  require('./skills.controller');

  angular
    .module('trevor')
    .config(['$routeProvider', routes]);

  function routes($routeProvider){
    $routeProvider
      .when('/background',{
        template: skillsHtml
      })
      .when('/skills',{
        template: skillsHtml
      });
  }

}());
