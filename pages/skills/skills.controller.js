
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
      'Client-side: jQuery, Angular 1, ReactJs, SSE, WebSockets',
      'Database: MSSQL, MySQL, MongoDb, Redis, RavenDb / Mongoose, NHibernate, PetaPoco, GraphQL',
      'Tools: Bash, Git, AWS, Docker Compose, RabbitMQ, IIS, Gulp, Webpack, Visual Studio, NUnit, Mocha, Jasmine',
      'Concepts: SOLID, DDD, DRY, REST, SPA, OWASP, 12 Factor App'
    ];
  }

}());
