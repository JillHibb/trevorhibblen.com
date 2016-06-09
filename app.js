;(function(){

  'use strict';

  // css
  require("./bower_components/bootstrap/dist/css/bootstrap.min.css");
  require('./site.less');

  // images and other files
  require('./images/sky.jpg');

  // core refs
  require("./bower_components/angular/angular.min.js");
  require("./bower_components/angular-animate/angular-animate.min.js");
  require("./bower_components/angular-route/angular-route.min.js");

  // app
  angular.module('trevor',['ngRoute','ngAnimate']);
  angular.module('trevor').config(['$routeProvider', routes]);

  require('./pages/title/title.app');
  require('./pages/contact/contact.app');
  require('./pages/skills/skills.app');
  require('./pages/about/about.app');
  require('./pages/wedding/wedding.app');
  require('./directives/nav/nav.app');

  function routes($routeProvider){
    $routeProvider
      .otherwise({
        redirectTo:'/'
      });
  }

}());
