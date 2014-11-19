//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require angular
//= require angular-resource
//= require_tree .

(function(){

	var demoApp = angular.module('demoApp', []);

		demoApp.controller('MainCtrl', function($scope, demoFactory){
			// $scope.name = "Hello World!";
			console.log(demoFactory);
		});


		demoApp.factory('demoFactory', function(){
			return "test string"
		})

})();



// angluar
// 	.module('muza' [
// 		'ui.router'
// 	])

// 	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
// 		$urlRouterProvider.otherwise('/');

// 		$stateProvider
// 			.state('home', {
// 				url: '/',
// 				templateUrl: '??????'
// 				controller: ['$scope', function($scope) {

// 				}]
// 			})

// 		$stateProvider
// 			.state('about', {
// 				url: '/about',
// 				templateUrl: '??????'
// 				controller: ['$scope', function($scope) {

// 				}]
// 			})

// 		$stateProvider
// 			.state('contact', {
// 				url: '/contact',
// 				templateUrl: '??????'
// 				controller: ['$scope', function($scope) {

// 				}]
// 			})

// 	}])