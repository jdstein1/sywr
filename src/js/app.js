// (function() {
// 	'use strict';

	var app = angular.module('app', [
		'ngRoute', 'ngResource'
		])

	app.constant('constProtocol', ['http', 'https']);
	app.constant('constBungieUrl', {
		"domain":"www.bungie.net",
		"lang":"en",
		"clan":"Clan",
		"platform":"Xbox",
		"profile":"Profile"
		});

	app.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.
				when('/', {templateUrl: 'views/home.html', controller: 'cMain'}).
				when('/blog', {templateUrl: 'views/blog.html', controller: 'cBlog'}).
				when('/about', {templateUrl: 'views/about.html', controller: 'cAbout'}).
				when('/feedback', {templateUrl: 'views/feedback.html', controller: 'cFeedback'}).
				when('/clan', {templateUrl: 'views/clan.html', controller: 'cClan'}).
				when('/members', {templateUrl: 'views/members.html', controller: 'cMembers'}).
				when('/members/:name', {templateUrl: 'views/members/member.html', controller: 'cMembers'}).
				when('/games', {templateUrl: 'views/games.html', controller: 'cGames'}).
				when('/games/:game', {templateUrl: 'views/games/game.html', controller: 'cGames'}).
				otherwise({redirectTo: '/'});
		}
	]);
	// console.log('test app:', angular.module('app'));

// })();
