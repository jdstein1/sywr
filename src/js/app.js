// (function() {
// 	'use strict';

/*

NOTES

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
		'ngMaterial', 'ngRoute', 'ngMessages'
	]);

	app.constant('constMeta', {
		"title":"Strike Your Way Raiders",
		"description":"a way for friends to enjoy video games while not playing them",
		"crew":"Social Degenerate Nerds",
		"since":2014,
		"console":"Xbox",
		"id":519979
	});
	// URLs that need to be covered:
	// API - ITEM HASH:       http://www.bungie.net/Platform/Destiny/Manifest/InventoryItem/3658182170
	// API - CLAN:            http://www.bungie.net/Platform/Group/519979/MembersV3/?lc=en&fmt=true&lcin=true&currentPage=1
	// API - CLAN:            http://www.bungie.net/Platform/Group/519979/Members/?lc=en&fmt=true&lcin=true&currentPage=1
	// API - MEMBER PROFILE:  http://www.bungie.net/Platform/User/GetBungieNetUserById/8310647/?lc=en&fmt=true&lcin=true
	// URL - CLAN:            http://www.bungie.net/en/Clan/Xbox/519979
	// URL - MEMBER PROFILE:  http://www.bungie.net/en/Profile/254/3892477
	app.constant('constFileTypes', ['jpg', 'png', 'gif']);
	app.constant('constProtocol', ['http', 'https']);
	app.constant('constBungieUrl', {
		"protocol": ['http', 'https'],
		"domain":"www.bungie.net",
		"lang":"en",
		"platform":"Platform",
		"destiny":"Destiny",
		"clan":"Clan",
		"console":"Xbox",
		"profile":"Profile"
		});

	// app.config(['$mdThemingProvider', function ($mdThemingProvider) {
	// 		$mdThemingProvider.theme('default')
	// 			.primaryColor('teal')
	// 			.accentColor('orange');
	// 	}
	// ]);
	app.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.
				when('/', {templateUrl: 'views/home.html', controller: 'cHome'}).
				when('/test', {templateUrl: 'views/test.html', controller: 'cTest'}).
				when('/blog', {templateUrl: 'views/blog.html', controller: 'cBlog'}).
				when('/about', {templateUrl: 'views/about.html', controller: 'cAbout'}).
				when('/feedback', {templateUrl: 'views/feedback.html', controller: 'cFeedback'}).
				when('/members', {templateUrl: 'views/members.html', controller: 'cMembers'}).
				when('/members/:member', {templateUrl: 'views/members/member.html', controller: 'cMemberDetail'}).
				when('/games', {templateUrl: 'views/games.html', controller: 'cGames'}).
				when('/games/:game', {templateUrl: 'views/games/game.html', controller: 'cGameDetail'}).
				when('/items', {templateUrl: 'views/items.html', controller: 'cItems'}).
				when('/items/:item', {templateUrl: 'views/items/item.html', controller: 'cItemDetail'}).
				when('/compare', {templateUrl: 'views/compare.html', controller: 'cMembers'}).
				// when('/compare/:type', {templateUrl: 'views/compare/type.html', controller: 'cCompareDetail'}).
				when('/compare/quick', {templateUrl: 'views/compare/quick.html', controller: 'cMemberDetail'}).
				otherwise({redirectTo: '/'});
		}
	]);
	console.log('test app:', angular.module('app'));

// })();
