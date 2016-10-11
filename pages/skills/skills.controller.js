
;(function(){

  'use strict';

  angular
    .module('trevor')
    .controller('skillsCon', ['$log', controller]);

  function controller($log){
    var _vm = this;
    _vm.skills = [
      'Languages: C#, Javascript, T-SQL',
      'Server-side: NodeJs, ExpressJs, .Net MVC/WebApi, .Net Webforms',
      'Client-side: jQuery, AngularJs, ReactJs',
      'Database: MSSQL, MySQL, MongoDb, Redis, RavenDb / Mongoose, NHibernate, PetaPoco',
      'Tools: AWS, Docker Compose, RabbitMQ, IIS, Bash, Git, Less, SASS, Gulp, Webpack, Visual Studio',
      'Concepts: SOLID, DDD, DRY, REST, SPA, OWASP, 12 Factor App'
    ];
  }

}());
