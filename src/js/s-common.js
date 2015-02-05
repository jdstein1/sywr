/*s-common.js*/
(function() {
	'use strict';

	app.service('sHeaderMenu', sHeaderMenu)
	function sHeaderMenu() {
		var stitle = 'sHeaderMenu';
		console.log('START', stitle);

		var headerMenu = {
			"name":"Menu",
			"order":1,
			"show":true,
			"icon":"flaticon-menu55",
			"path":"",
			"action":"menu"
		};
		return headerMenu;
	}
	// console.log('test sHeaderMenu:', angular.module('app').service('sHeaderMenu'));

	app.service('sHeaderSettings', sHeaderSettings)
	function sHeaderSettings() {
		var stitle = 'sHeaderSettings';
		console.log('START', stitle);

		var headerSettings = {
			"name":"Settings",
			"order":2,
			"show":false,
			"icon":"flaticon-settings49",
			"path":"clan",
			"action":"menu"
		};
		return headerSettings;
	}
	// console.log('test sHeaderSettings:', angular.module('app').service('sHeaderSettings'));

	app.service('sNavMenu', sNavMenu)
	function sNavMenu() {
		var stitle = 'sNavMenu';
		console.log('START', stitle);

		var menuItems = [{
			"name":"Home",
			"order":1,
			"show":true,
			"icon":"flaticon-home149",
			"path":"",
			"action":"menu"
		},{
			"name":"Players",
			"order":6,
			"show":true,
			"icon":"flaticon-users25",
			"path":"players",
			"action":"menu",
			"submenu":[
				{"name":"Submenu"}
			]
		},{
			"name":"Games",
			"order":7,
			"show":true,
			"icon":"flaticon-gamepad3",
			"path":"games",
			"action":"menu",
			"submenu":[
				{"name":"Destiny"}
			]
		},{
			"name":"Compare",
			"order":8,
			"show":true,
			"icon":"flaticon-swap3",
			"path":"compare",
			"action":"menu"
		},{
			"name":"Environments",
			"order":9,
			"show":false,
			"icon":"flaticon-compass106",
			"path":"items",
			"action":"menu",
			"tags":["maps","locations","environments"],
			"submenu":[{
				"name":"Destiny",
				"submenu":[
					{"name":"Earth"},
					{"name":"Moon"},
					{"name":"Venus"},
					{"name":"Mars"},
					{"name":"Reef"}
				]}
			]
		},{
			"name":"Items",
			"order":10,
			"show":false,
			"icon":"flaticon-list88",
			"path":"items",
			"action":"menu",
			"tags":["items","gear","weapons","armor","consumables"]
		},{
			"name":"About",
			"order":2,
			"show":true,
			"icon":"flaticon-users25",
			"path":"about",
			"action":"menu"
		},{
			"name":"Blog",
			"order":3,
			"show":true,
			"icon":"flaticon-users25",
			"path":"blog",
			"action":"menu"
		},{
			"name":"Clan",
			"order":4,
			"show":true,
			"icon":"flaticon-users25",
			"path":"clan",
			"action":"menu"
		},{
			"name":"Feedback",
			"order":5,
			"show":true,
			"icon":"flaticon-chat75",
			"path":"feedback",
			"action":"menu",
			"tags":["form","feedback","gripes","complaints","suggestions"]
		}];
		return menuItems;
	}
	// console.log('test sNavMenu:', angular.module('app').service('sNavMenu'));

	app.service('sNavSettings', sNavSettings)
	function sNavSettings() {
		var stitle = 'sNavSettings';
		console.log('START', stitle);

		var settingsItems = [{
			"name":"Theme",
			"order":1,
			"show":true,
			"icon":"flaticon-visibility1",
			"path":"theme",
			"action":"theme"
		},{
			"name":"Fonts",
			"order":3,
			"show":true,
			"icon":"flaticon-underline7",
			"path":"fonts",
			"action":"fonts"
		},{
			"name":"Colors",
			"order":2,
			"show":true,
			"icon":"flaticon-painter14",
			"path":"colors",
			"action":"colors"
		},{
			"name":"Icons",
			"order":4,
			"show":true,
			"icon":"flaticon-underline6",
			"path":"icons",
			"action":"icons"
		}];
		return settingsItems;
	}
	// console.log('test sNavSettings:', angular.module('app').service('sNavSettings'));

})();
