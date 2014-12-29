angular
		.module('muza', [
				'ngAnimate',
				'ui.router',
				'templates'
		])
		.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

				/*
	    	* Routes and States.
	    	*/

	    	$stateProvider

	    		.state('home', {
	    			url: '/',
	    			templateUrl: 'home.html',
	    			controller: 'mainCtrl'
	    		})

            $stateProvider

                .state('admin', {
                    url: '/admin',
                    templateUrl: 'admin.html',
                    controller: 'AdminController'
                })            
	    		// an abstract state that just serves as a
        		// parent for the below child states
        		.state('dashboard', {
            		abstract: true,
            		url: '/dashboard',
            		templateUrl: 'dashboard/layout.html'
        		})
                // the default route when someone hits dashboard
                .state('dashboard.one', {
                    url: '',
                    templateUrl: 'dashboard/one.html'
                })
                // this is /dashboard/two
                .state('dashboard.two', {
                    url: '/two',
                    templateUrl: 'dashboard/two.html'
                })
                // this is /dashboard/three
                .state('dashboard.three', {
                    url: '/three',
                    templateUrl: 'dashboard/three.html'
                });

    	    	// default fall back route
        		$urlRouterProvider.otherwise('/');

        		// enable HTML5 Mode for SEO
        		// $locationProvider.html5Mode(true);
        		$locationProvider.html5Mode({
      					enabled: true,
      					requireBase: false
    			});
		});

// Routing Example Below //

// angluar
//  .module('muza' [
//      'ui.router'
//  ])

//  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
//      $urlRouterProvider.otherwise('/');

//      $stateProvider
//          .state('home', {
//              url: '/',
//              templateUrl: '??????'
//              controller: ['$scope', function($scope) {

//              }]
//          })

//      $stateProvider
//          .state('about', {
//              url: '/about',
//              templateUrl: '??????'
//              controller: ['$scope', function($scope) {

//              }]
//          })

//      $stateProvider
//          .state('contact', {
//              url: '/contact',
//              templateUrl: '??????'
//              controller: ['$scope', function($scope) {

//              }]
//          })

//  }])
