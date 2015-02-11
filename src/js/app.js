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
		'ngMaterial', 'ngRoute', 'ngMessages'
	]);
	app.constant('constClan', {
		"title":{
			"abbr":"SYWR",
			"plain":"Strike Your Way Raiders",
			"camel":"strikeYourWayRaiders",
			"underscore":"strike_your_way_raiders",
			"hyphen":"strike-your-way-raiders",
			"dot":"strike.your.way.raiders"
		},
		"description":"a way for friends to enjoy video games while not playing them",
		"crew":"Social Degenerate Nerds",
		"since":2014,
		"console":"Xbox",
		"id":519979
	});

	app.constant('constLogo', {
		"destiny":{
			"path":"lib/brands/destiny/",
			"alt":"Destiny Logo",
			"hz":{
				"bk":"Destiny_Logo_Horizontal_Black.png",
				"wh":"Destiny_Logo_Horizontal_White.png"
			},
			"st":{
				"bk":"Destiny_Logo_Stacked_Black.png", 
				"wh":"Destiny_Logo_Stacked_White.png"
			}
		},
		"bungie":{
			"path":"lib/brands/bungie/",
			"alt":"Bungie Logo",
			"hz":{
				"bk":"Destiny_Logo_Horizontal_Black.png",
				"wh":"Destiny_Logo_Horizontal_White.png"
			},
			"st":{
				"bk":"Destiny_Logo_Stacked_Black.png",
				"wh":"Destiny_Logo_Stacked_White.png"
			},
			"iconography":{
				"carnage":"iconography/Carnage_Zone.png",
				"lovedark":"iconography/Love_Bungie-dark.png",
				"lovelight":"iconography/Love_Bungie-light.png",
				"septagon":"iconography/Septagon.png",
				"shield":"iconography/Shield_Crest.png",
				"swordburst":"iconography/Swordburst_Crest.png"
			}
		}
	});

	app.constant('constProtocol', ['http', 'https']);
	app.constant('constFileTypes', ['jpg', 'png', 'gif']);
// URLs that need to be covered by the constBungieUrl object:
// * URL - Clan
//     * http://www.bungie.net/en/Clan/Xbox/519979
// * URL - Member Profile
//     * http://www.bungie.net/en/Profile/254/3892477
// * API - Item Hash
//     * http://www.bungie.net/Platform/Destiny/Manifest/InventoryItem/3658182170
// * API - Clan
//     * http://www.bungie.net/Platform/Group/519979/MembersV3/?lc=en&fmt=true&lcin=true&currentPage=1
// * API - Clan
//     * http://www.bungie.net/Platform/Group/519979/Members/?lc=en&fmt=true&lcin=true&currentPage=1
// * API - Member Profile
//     * http://www.bungie.net/Platform/User/GetBungieNetUserById/8310647/?lc=en&fmt=true&lcin=true
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
			when('/about', {templateUrl: 'views/about.html', controller: 'cAbout'}).
			when('/blog', {templateUrl: 'views/blog.html', controller: 'cBlog'}).
			when('/clan', {templateUrl: 'views/clan.html', controller: 'cClan'}).
			when('/compare', {templateUrl: 'views/compare.html', controller: 'cPlayers'}).
			when('/compare/quick', {templateUrl: 'views/compare/quick.html', controller: 'cPlayerDetail'}).
			// when('/compare/:type', {templateUrl: 'views/compare/type.html', controller: 'cCompareDetail'}).
			when('/environment', {templateUrl: 'views/environment.html', controller: 'cEnvironment'}).
			when('/feedback', {templateUrl: 'views/feedback.html', controller: 'cFeedback'}).
			when('/games', {templateUrl: 'views/games.html', controller: 'cGames'}).
			when('/games/:game', {templateUrl: 'views/games/game.html', controller: 'cGameDetail'}).
			when('/items', {templateUrl: 'views/items.html', controller: 'cItems'}).
			when('/items/:item', {templateUrl: 'views/items/item.html', controller: 'cItemDetail'}).
			when('/players', {templateUrl: 'views/players.html', controller: 'cPlayers'}).
			when('/:member', {templateUrl: 'views/players/player.html', controller: 'cPlayerDetail'}).
			when('/:member/characters', {templateUrl: 'views/characters/compare.html', controller: 'cPlayerDetail'}).
			when('/:member/:character', {templateUrl: 'views/characters/display.html', controller: 'cPlayerDetail'}).
			when('/:member/:activity', {templateUrl: 'views/players/activity.html', controller: 'cPlayerDetail'}).
			when('/test', {templateUrl: 'views/test.html', controller: 'cTest'}).
			otherwise({redirectTo: '/'});
		}
	]);
	console.log('test app:', angular.module('app'));

// })();
