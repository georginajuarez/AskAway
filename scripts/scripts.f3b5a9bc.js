"use strict";angular.module("askAwayApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("askAwayApp").controller("MainCtrl",["$scope","tellMe",function(a,b){a.tellMe=b.query(),a.reloadPage=function(){window.location.reload()}}]),angular.module("askAwayApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("askAwayApp").factory("tellMe",["$resource",function(a){return a("https://yesno.wtf/api",{},{query:{method:"GET",params:{answer:"yes",forced:!1,image:"https://yesno.wtf/assets/yes/2.gif"},isArray:!1}})}]),angular.module("askAwayApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="about-monkey"> <h1>About this app...</h1> <p> This is a fun app for fun people who have trouble making up their minds. It\'s not meant to be taken seriously, although quite a bit of work was put into taking the work out of making a choice. </p> <h3>Sugar, spice, and everything nice!</h3> <dl> <dt>This app was created using:</dt> <dd>- Yeoman</dd> <dd>- AngularJS</dd> <dd>- Bootstrap</dd> <dd>- SASS</dd> </dl> </div>'),a.put("views/main.html",'<div ng-app class="jumbotron" ng-controller="MainCtrl"> <!-- Yay or Nay! --> <h1><img class="mainPic" ng-src="{{ tellMe.image }}" alt="yes or no response image"></h1> <h1 class="jumbo-answer">{{ tellMe.answer }}</h1> <!-- PUT API DATA HERE, IN JUMBOTRON --> </div> <div class="main-monkey"> <!-- NADA GOES HERE--> </div> <div class="row"> <!-- ADD ROW.COLUMN.12 TO THIS DIV --> <div class="ask-me"> <p> <label>Ask away! <input type="text" name="question" placeholder="Should I..."> </label> <button class="btn btn-primary" type="button" ng-click="reloadPage();">Tell Me! <span class="glyphicon glyphicon-ok"></span></button> </p> </div> </div> <!-- FOR CLASS:ROW --> <div class="tell-me-how"> <h4>Got a question? Great! Here\'s how to ask --</h4> <p>Keep in mind that I don\'t have all the answers in the universe but I can help you make your mind up.</p> <dl> <dt>Ask me stuff, like...</dt> <dd>- Should I eat another cookie?</dd> <dd>- Thai for dinner?</dd> <dd>- Netflix and chill?</dd> <dd>- Do I want to go out on the town?</dd> </dl> </div>')}]);