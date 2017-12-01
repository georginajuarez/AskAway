"use strict";angular.module("askAwayApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("askAwayApp").controller("MainCtrl",["$scope","tellMe",function(a,b){a.tellMe=b.query(),a.refreshCurrent=function(){a.tellMe=b.query({query:a.query})}}]),angular.module("askAwayApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("askAwayApp").factory("tellMe",["$resource",function(a){return a("https://yesno.wtf/api",{},{query:{method:"GET",params:{answer:"yes",forced:!1,image:"https://yesno.wtf/assets/yes/2.gif"},isArray:!1}})}]),angular.module("askAwayApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="about-monkey"> <p>This is the about view.</p> </div>'),a.put("views/main.html",'<div ng-app class="jumbotron" ng-controller="MainCtrl"> <!-- Yay or Nay! --> <h1><img ng-src="{{ tellMe.image }}"></h1> <h1>{{ tellMe.answer }}</h1> <!-- PUT API DATA HERE, IN JUMBOTRON --> </div> <div class="main-monkey"> <!-- NADA GOES HERE--> </div> <div class="row"> <!-- ADD ROW.COLUMN.12 TO THIS DIV --> <div class="ask-me"> <p> <label>Ask away! <input type="text"> </label> <button class="btn btn-xs btn-primary" ng-click="refreshCurrent()">Tell Me! <span class="glyphicon glyphicon-ok"></span></button> </p> <!-- ADD INPUT FIELD ex. <p>Name: <input type="text" ng-model="name"></p> NEXT TO SUBMIT BUTTON. REMOVE CURRENT CLASS IN THIS DIV. --> </div> </div> <!-- FOR CLASS:ROW --> <div> <h4>How to use app</h4> </div>')}]);