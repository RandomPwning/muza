//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require angular
//= require angular-resource
//= require_tree .

(function(){

	var demoApp = angular.module('demoApp', [])

		// Main Controller //
		.controller('MainCtrl', function($scope, demoFactory){
			// $scope.name = "Hello World!";
			console.log(demoFactory);
		})

		// Demo Factory //
		.factory('demoFactory', function(){
			var factory = {};
			var users = [];

			factory.getCustomers = function(){
				return users;
			};
			return factory;
		});

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