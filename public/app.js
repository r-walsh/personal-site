var app = angular.module('personalSite', ['ui.router']);

app.config(function( $stateProvider, $urlRouterProvider ) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: './public/views/home.html',
			controller: 'postCtrl'
		})
		.state('about', {
			url: '/about',
			templateUrl: './public/views/about.html',
			controller: 'mainCtrl'
		})
		.state('technology', {
			url: '/technology',
			templateUrl: './public/views/technology.html',
			controller: 'techCtrl'
		})

		
});