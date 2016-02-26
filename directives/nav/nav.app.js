;(function(){

  'use strict';

  require('./nav.less');
  const navHtml = require('./nav.html');
  require('./nav.controller');

  angular
    .module('trevor')
    .directive('navr', [navDirective]);

  function navDirective(){
    return {
      restrict: 'E',
      template: navHtml
    };
  }

}());
