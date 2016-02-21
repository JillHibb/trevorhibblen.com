;(function(){

  'use strict';

  const html = require('./nav.html');
  require('./nav.less');
  require('./nav.controller');

  angular
    .module('trevor')
    .directive('navr', [navDirective]);

  function navDirective(){
    return {
      restrict: 'E',
      template: html
    };
  }

}());
