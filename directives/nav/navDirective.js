;(function(){

  'use strict';

  angular
    .module('trevor')
    .directive('navr', [navDirective]);

  function navDirective(){
    return {
      restrict: 'E',
      templateUrl: '/directives/nav/nav.html'
    };
  }

}());
