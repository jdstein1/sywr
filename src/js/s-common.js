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

	app.service('sMenu', sMenu)
	function sMenu() {
		var stitle = 'sMenu';
		console.log('START', stitle);

		var menuItems = [{
			"name":"Home",
			"order":1,
			"show":true,
			"icon":"home3",
			"path":"",
			"action":"menu"
		},{
			"name":"Clan",
			"order":2,
			"show":false,
			"icon":"tree",
			"path":"clan",
			"action":"menu"
		},{
			"name":"Players",
			"order":3,
			"show":true,
			"icon":"user",
			"path":"members",
			"action":"menu"
		},{
			"name":"Games",
			"order":5,
			"show":true,
			"icon":"pacman",
			"path":"games",
			"action":"menu"
		},{
			"name":"Compare",
			"order":4,
			"show":true,
			"icon":"pacman",
			"path":"compare",
			"action":"menu"
		},{
			"name":"Items",
			"order":6,
			"show":false,
			"icon":"pacman",
			"path":"items",
			"action":"menu"
		},{
			"name":"Feedback",
			"order":7,
			"show":true,
			"icon":"bubbles3",
			"path":"feedback",
			"action":"menu"
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
			"icon":"paint-format",
			"path":"theme",
			"action":"theme"
		},{
			"name":"Colors",
			"order":2,
			"show":true,
			"icon":"eyedropper",
			"path":"colors",
			"action":"colors"
		},{
			"name":"Fonts",
			"order":3,
			"show":true,
			"icon":"font",
			"path":"fonts",
			"action":"fonts"
		},{
			"name":"Icons",
			"order":4,
			"show":true,
			"icon":"happy",
			"path":"icons",
			"action":"icons"
		}];

		return menuItems;
	}
	// console.log('test sSettings:', angular.module('app').service('sSettings'));

})();
