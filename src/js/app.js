// (function() {
// 	'use strict';

	var app = angular.module('app', [
		'ngRoute', 'ngResource'
		])

	// URLs that need to be covered:
	// API - ITEM HASH:       http://www.bungie.net/platform/Destiny/Manifest/InventoryItem/3658182170
	// API - CLAN:            http://www.bungie.net/Platform/Group/519979/MembersV3/?lc=en&fmt=true&lcin=true&currentPage=1
	// API - CLAN:            http://www.bungie.net/Platform/Group/519979/Members/?lc=en&fmt=true&lcin=true&currentPage=1
	// API - MEMBER PROFILE:  http://www.bungie.net/Platform/User/GetBungieNetUserById/8310647/?lc=en&fmt=true&lcin=true
	// URL - CLAN:            http://www.bungie.net/en/Clan/Xbox/519979
	// URL - MEMBER PROFILE:  http://www.bungie.net/en/Profile/254/3892477
	app.constant('constProtocol', ['http', 'https']);
	app.constant('constBungieUrl', {
		"domain":"www.bungie.net",
		"lang":"en",
		"platform":"Platform",
		"destiny":"Destiny",
		"clan":"Clan",
		"console":"Xbox",
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
				when('/members/:member', {templateUrl: 'views/members/member.html', controller: 'cMemberDetail'}).
				when('/games', {templateUrl: 'views/games.html', controller: 'cGames'}).
				when('/games/:game', {templateUrl: 'views/games/game.html', controller: 'cGameDetail'}).
				when('/items', {templateUrl: 'views/items.html', controller: 'cItems'}).
				when('/items/:item', {templateUrl: 'views/items/item.html', controller: 'cItemDetail'}).
				otherwise({redirectTo: '/'});
		}
	]);
	// console.log('test app:', angular.module('app'));

// })();
