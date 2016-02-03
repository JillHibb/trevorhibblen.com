;(function(){

  'use strict';

  angular
    .module('trevor')
    .controller('weddingCon', ['$rootScope', weddingController]);

  function weddingController($rootScope){
    $rootScope.active='wedding';
  }

}());
