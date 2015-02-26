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
	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'views/home.html', 
				controller: 'cHome'}).
			when('/todo', {
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
			when('/clan', {
				templateUrl: 'views/clan.html', 
				controller: 'cClan'}).
			when('/compare', {
				templateUrl: 'views/compare.html', 
				controller: 'cPlayers'}).
			when('/compare/quick', {
				templateUrl: 'views/compare/quick.html', 
				controller: 'cPlayerDetail'}).
			// when('/compare/:type', {
				// templateUrl: 'views/compare/type.html', 
				// controller: 'cCompareDetail'}).
			// GAMES
			when('/games', {
				templateUrl: 'views/games.html', 
				controller: 'cGames'}).
			when('/games/:game', {
				templateUrl: 'views/games/game.html', 
				controller: 'cGameDetail'}).
			when('/games/:game/environments/:environment', {
				templateUrl: 'views/environment.html', 
				controller: 'cGameEnvironment'}).
			// ITEMS
			when('/items', {
				templateUrl: 'views/items.html', 
				controller: 'cItems'}).
			when('/items/:item', {
				templateUrl: 'views/items/item.html', 
				controller: 'cItemDetail'}).
			// PLAYERS
			when('/players', {
				templateUrl: 'views/players.html', 
				controller: 'cPlayers'}).
			when('/players/:member', {
				templateUrl: 'views/players/player.html', 
				controller: 'cPlayerDetail'}).
			// CHARACTERS
			when('/players/:member/character', {
				templateUrl: 'views/characters/compare.html', 
				controller: 'cPlayerDetail'}).
			when('/players/:member/characters/:character', {
				templateUrl: 'views/characters/display.html', 
				controller: 'cCharacterDetail'}).
			// when('/players/:member/actvity', {
				// templateUrl: 'views/players/activity.html', 
				// controller: 'cPlayerDetail'}).
			when('/test', {
				templateUrl: 'views/test.html', 
				controller: 'cTest'}).
			otherwise({redirectTo: '/'});
		}
	]);
	console.log('test app:', angular.module('app'));

// })();
