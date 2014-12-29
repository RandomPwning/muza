angular.module('muza')
	.controller('AdminController', ['$scope', '$location', function($scope, $location) {
	console.log('adminController loaded');
	$scope.adminItems = [
	{name : 'Users', url : 'users'}, 
	{name : 'Roles', url : 'roles'},
	{name : 'Statuses', url : 'statuses'}, 
	// {name : 'Reports', url : 'reports'},
	// {name : 'Newsletters', url : 'newsletters'},
	// {name : 'Blog posts', url : 'blog_posts'}
  ];

	$scope.loadPage = function(url) {
		console.log(url);
		$location.path(url);
	};

	$scope.lookupStatuses = function(lookupId){
		var url = '/statuses/'+lookupId
		$location.path(url);
	};
	$scope.lookupUsers = function(lookupId){
		var url = '/users/'+lookupId
		$location.path(url);
	};
}]);

