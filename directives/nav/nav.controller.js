;(function(){

  'use strict';

  angular
    .module('trevor')
    .controller('navHomeCon', ['$log','$location', navController]);

  function navController($log, $location){
    var _vm = this;

    // set active based on the path for new requests and remove the leading '/'
    _vm.active = ($location.path()||'hi').replace(/^\//,'');
    _vm.links = [
      { text:'hi', link:'#/hi' },
      { text:'about', link:'#/about' },
      { text:'background', link:'#/background' },
      { text:'contact', link:'#/contact' },
      { text:'iceland', link:'#/iceland' }
    ];
    _vm.click = clickHappened;

    // functions

    function clickHappened(navAnchor){
      _vm.active = navAnchor.text;
    }
  }

}());
