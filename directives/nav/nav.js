;(function(){

  console.log('nav.js');

  'use strict';

  angular
    .module('trevor')
    .controller('navHomeCon', ['$log', navController])
    .directive('th-nav', navDirective);

  function navDirective(){
    console.log('nav dir');
    return {
        restrict: 'E',
        templateUrl: '/directives/nav/nav.html'
      };
  }

  function navController($log){
    $log('nav controller ini');
    _vm = this;
    _vm.active = 'about';
    _vm.links = [
      { text:'about', link:'#/about' },
      { text:'background', link:'#/background' },
      { text:'iceland', link:'#/iceland' }
    ];
  }

}());
