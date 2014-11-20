// Login Controller //

	angular
	      .module('muza', [])
	      .controller('loginCtrl' , loginCtrl);

	function loginCtrl($scope) { 
		$scope.name = "Hello World!";
	}