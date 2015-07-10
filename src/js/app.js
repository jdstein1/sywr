// (function() {
// 	'use strict';

/* NOTES

AngularJS dependencies:
 - ngRoute (required)
 - ngResource (optional)

Angular Material dependencies:
 - AngularMaterial (required)
 - ngAnimate (required)
 - ngAria (required)
 - HammerJS (required)

*/

	var app = angular.module('app', [ 
		'ngMaterial', 'ngRoute', 'ngMessages', 'markdown'
	]);
	app.config(['$mdThemingProvider', function ($mdThemingProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('indigo')
			.accentPalette('light-blue')
			.warnPalette('amber')
			.backgroundPalette('grey');
		}
	]);
	app.config(['$mdThemingProvider', function ($mdThemingProvider) {
		$mdThemingProvider.theme('sywr')
			.primaryPalette('blue-grey')
			.accentPalette('blue')
			.warnPalette('red')
			.backgroundPalette('grey');
		}
	]);
	app.config(function($mdThemingProvider) {
		var blueGreyDarkMap = $mdThemingProvider.extendPalette('blue-grey', {
			'contrastDefaultColor':'dark',
			'contrastDarkColors':undefined,
			'contrastLightColors':undefined
		});
		$mdThemingProvider.definePalette('blue-grey-dark', blueGreyDarkMap);
		$mdThemingProvider.theme('sywr-dark')
			// .primaryPalette('blue-grey-dark')
			.primaryPalette('blue-grey')
			.accentPalette('blue')
			.warnPalette('red')
			.backgroundPalette('blue-grey');
		}
	);
	app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
		// $locationProvider.hashPrefix();
		// $locationProvider.html5Mode(true);
		$routeProvider.
			when('/', {
				templateUrl: 'views/home.html', 
				controller: 'cHome'}).
			when('/sitemap', {
				templateUrl: 'views/sitemap.html', 
				controller: 'cSitemap'}).
			when('/todos', {
				templateUrl: 'views/todo.html', 
				controller: 'cTodo'}).
			when('/about', {
				templateUrl: 'views/about.html', 
				controller: 'cAbout'}).
			when('/blog', {
				templateUrl: 'views/blog.html', 
				controller: 'cBlog'}).
			when('/feedback', {
				templateUrl: 'views/feedback.html', 
				controller: 'cFeedback'}).
			when('/test', {
				templateUrl: 'views/test.html', 
				controller: 'cTest'}).
			when('/test/players', {
				templateUrl: 'views/test-players.html', 
				controller: 'cHome'}).
			when('/loadout', {
				templateUrl: 'views/loadout.html', 
				controller: 'cLoadout'}).
			// COMPARE ALL PLAYERS
			when('/player/all', {
				templateUrl: 'views/player-all.html', 
				controller: 'cPlayerAll'}).
			// DISPLAY ONE PLAYER
			when('/player/:player', {
				templateUrl: 'views/player-detail.html', 
				controller: 'cPlayerDetail'}).
			// COMPARE ALL CHARACTERS
			when('/player/:player/character/all', {
				templateUrl: 'views/character-all.html', 
				controller: 'cCharacterAll'}).
			// DISPLAY ONE CHARACTER
			when('/player/:player/character/:character', {
				templateUrl: 'views/character-detail.html', 
				controller: 'cCharacterDetail'}).
			otherwise({redirectTo: '/'});
		}
	]);
	console.log('test app:', angular.module('app'));

// })();
