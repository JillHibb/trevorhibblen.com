;(function(){

  'use strict';

  // require('./skills.html');
  // require('./skills.less');

  angular
    .module('trevor')
    .controller('skillsCon', skillsController);

  function skillsController(){
    var _vm = this;
    _vm.skills = [
      'Languages: C#, T-SQL, Javascript',
      'Server-side frameworks: .Net MVC/WebApi, .Net Webforms, ExpressJs',
      'Client-side frameworks: jQuery, AngularJs, ReactJs',
      'Database: MSSQL, MongoDb, CouchDb, RavenDb',
      'Tools: Git, IIS, AWS, NodeJs, Visual Studio, Vim, Less, Gulp, Bash, ImageMagick',
      'Concepts: SOLID, REST, SPA, OWASP'
    ];
  }

}());
