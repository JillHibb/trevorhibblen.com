var app = angular.module('trevor',['ngRoute','ngAnimate']);
app.config(['$routeProvider', routes]);
app.controller('skillsCon', ['$scope', skillsController]);
app.controller('aboutCon', ['$scope', aboutController]);
app.controller('weddingCon', ['$scope','$rootScope', weddingController]);

// setup

function routes($routeProvider){
  $routeProvider
    .when('/',{
      //template:title,
      template:title()
    })
    .when('/contact',{
      template:contact()
    })
    .when('/background',{
      template:skills(),
      controller:'skillsCon'
    })
    .when('/about',{
      template:about(),
      controller:'aboutCon'
    })
    .when('/iceland',{
      template:wedding(),
      controller:'weddingCon'
    })
    .otherwise({
      redirectTo:'/'
    });
}

// controllers

function skillsController($scope){
  var remarks = "I consider myself more of a puzzle solver than a programmer. My biggest challenges being to come up with ways to help save money or make money. I can feel comfortable with most any language and see them more as a means to an end. Writing good code is very important to me, but there are solid design principles that go beyond any single language and most end users could care less if you're using ES6 promises or async await unless it makes things faster.";
  var skills = [
    'Languages: C#, T-SQL, Javascript',
    'Server-side frameworks: .Net MVC/WebApi, .Net Webforms, ExpressJs',
    'Client-side frameworks: jQuery, AngularJs, ReactJs',
    'Database: MSSQL, MongoDb, CouchDb, RavenDb',
    'Tools: Git, IIS, AWS, NodeJs, Visual Studio, Vim, Less, Gulp, Bash, ImageMagick',
    'Concepts: SOLID, REST, SPA, OWASP'
  ];
  $scope.skills = skills;
  $scope.remarks = remarks;
}

function aboutController($scope){
  var remarks = "";
  $scope.remarks = remarks;
}

function weddingController($scope, $rootScope){
  $rootScope.active='wedding';
}

// templates

function title(){
  return '' +
  '<div class="title">'+
    '<div>' +
    '<span>Hi. My name is</span>'+
    '<h1>Trevor Hibblen.</h1>'+
    '<p>And this is where I park my name.</p>'+
    '</div>' +
  '</div>'+
 '</div>';
}

function contact(){
  return '' +
    '<div class="contact col-md-12 col-sm-12">' +
    '<div>' +
    '<h2>Feel free to email</h2>'+
    '<h1>me@trevorhibblen.com</h1>' +
    '</div>';
}

function skills(){
  return ''+
    '<div class="skillz">' +
    '<h2>Background</h2>'+
      '<ul class="listing"><li ng-repeat="s in skills">{{s}}</li></ul>'+
    '</div>';
}

function wedding(){
  return ''+
  '<div class="wedding">' +
  '<div><h2>Married in Iceland, Sept. 2015.</h2></div>'+
  '</div>';
}

function about(){
  return ''+
  '<div class="about">' +
  '<h2>About</h2>' +
  '<div>' +
  '<blockquote>' +
  "I'm a web-developer who works mostly in C# and Javascript. I love science fiction, violent video games and writing code."+
  '<br/><br/>' +
  "If you'd like to know more feel free to <a href='#/contact'>contact</a> me anytime."+
  '</blockquote>' +
  "</div>" +
  '</div>';
}
