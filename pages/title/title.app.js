;(function(){

  'use strict';

  require('./title.less');
  const titleHtml = require('./title.html');

  angular
    .module('trevor')
    .config(['$routeProvider', routes]);

  function routes($routeProvider){
    $routeProvider
      .when('/',{
        template: titleHtml
      })
      .when('/title',{
        template: titleHtml
      })
      .when('/hi',{
        template: titleHtml
      });
  }

}());
