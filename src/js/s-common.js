/*s-common.js*/
(function() {
	'use strict';

	app.service('sDataDestiny', sDataDestiny)
	function sDataDestiny() {
		var stitle = 'sDataDestiny';
		console.log('START', stitle);
		var DataDestiny = ['test1', 'test2', 'test3']
		return DataDestiny;
	}
	// console.log('test sDataDestiny:', angular.module('app').service('sDataDestiny'));

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

	app.service('sMenu', sMenu)
	function sMenu() {
		var stitle = 'sMenu';
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
			"order":3,
			"show":true,
			"icon":"flaticon-users25",
			"path":"members",
			"action":"menu"
		},{
			"name":"Compare",
			"order":4,
			"show":true,
			"icon":"flaticon-swap3",
			"path":"compare",
			"action":"menu"
		},{
			"name":"Games",
			"order":5,
			"show":true,
			"icon":"flaticon-gamepad3",
			"path":"games",
			"action":"menu"
		},{
			"name":"Environments",
			"order":8,
			"show":false,
			"icon":"flaticon-compass106",
			"path":"items",
			"action":"menu",
			"tags":["maps","locations","environments"]
		},{
			"name":"Items",
			"order":6,
			"show":false,
			"icon":"flaticon-list88",
			"path":"items",
			"action":"menu",
			"tags":["items","gear","weapons","armor","consumables"]
		},{
			"name":"Feedback",
			"order":7,
			"show":true,
			"icon":"flaticon-chat75",
			"path":"feedback",
			"action":"menu",
			"tags":["form","feedback","gripes","complaints","suggestions"]
		}];
		return menuItems;
	}
	// console.log('test sMenu:', angular.module('app').service('sMenu'));

	app.service('sSettings', sSettings)
	function sSettings() {
		var stitle = 'sSettings';
		console.log('START', stitle);

		var menuItems = [{
			"name":"Theme",
			"order":1,
			"show":true,
			"icon":"flaticon-visibility1",
			"path":"theme",
			"action":"theme"
		},{
			"name":"Colors",
			"order":2,
			"show":true,
			"icon":"flaticon-painter14",
			"path":"colors",
			"action":"colors"
		},{
			"name":"Fonts",
			"order":3,
			"show":true,
			"icon":"flaticon-underline7",
			"path":"fonts",
			"action":"fonts"
		},{
			"name":"Icons",
			"order":4,
			"show":true,
			"icon":"flaticon-underline6",
			"path":"icons",
			"action":"icons"
		}];
		return menuItems;
	}
	// console.log('test sSettings:', angular.module('app').service('sSettings'));

})();
