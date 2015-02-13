/*s-common.js*/
(function() {
	'use strict';

	app.service('sMenuNav', sMenuNav)
	function sMenuNav() {
		var stitle = 'sMenuNav';
		console.log('START', stitle);

		var menuItems = [{
			"name":"Home",
			"order":1,
			"enable":true,
			"icon":"flaticon-home149",
			"path":"",
			"action":"menu",
			"tags":["home","main"]
		},{
			"name":"Players",
			"order":51,
			"enable":true,
			"icon":"flaticon-framed1",
			"path":"players",
			"action":"menu",
			"tags":["players","members","people"],
			"submenu":[
				{"name":"Jeff"},
				{"name":"John"},
				{"name":"Kaleb"},
				{"name":"Kras"},
				{"name":"Tanner"},
				{"name":"Vikas"}
			]
		},{
			"name":"Characters",
			"order":52,
			"enable":true,
			"icon":"flaticon-framed1",
			"path":"players",
			"action":"menu",
			"tags":["character","pc","avatar"]
		},{
			"name":"Games",
			"order":7,
			"enable":false,
			"icon":"flaticon-gamepad3",
			"path":"games",
			"action":"menu",
			"tags":["games","videogames"],
			"submenu":[
				{"name":"Destiny"}
			]
		},{
			"name":"Compare",
			"order":8,
			"enable":false,
			"icon":"flaticon-swap3",
			"path":"compare",
			"action":"menu",
			"tags":["compare","comparison"]
		},{
			"name":"Environments",
			"order":9,
			"enable":false,
			"icon":"flaticon-map102",
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
			"enable":false,
			"icon":"flaticon-list88",
			"path":"items",
			"action":"menu",
			"tags":["item","items","gear","weapons","armor","consumables"]
		},{
			"name":"About",
			"order":2,
			"enable":true,
			"icon":"flaticon-round52",
			"path":"about",
			"action":"menu",
			"tags":["about","info"]
		},{
			"name":"Blog",
			"order":3,
			"enable":false,
			"icon":"flaticon-blogger12",
			"path":"blog",
			"action":"menu",
			"tags":["blog","news"]
		},{
			"name":"Clan",
			"order":50,
			"enable":true,
			"icon":"flaticon-users25",
			"path":"clan",
			"action":"menu",
			"tags":["clan","group","members"]
		},{
			"name":"Todos",
			"order":99,
			"enable":true,
			"icon":"flaticon-check51",
			"path":"todo",
			"action":"menu",
			"tags":["todo","todos","tasks"]
		},{
			"name":"Feedback",
			"order":4,
			"enable":true,
			"icon":"flaticon-chat75",
			"path":"feedback",
			"action":"menu",
			"tags":["form","feedback","gripes","complaints","suggestions"]
		}];
		return menuItems;
	}
	// console.log('test sMenuNav:', angular.module('app').service('sMenuNav'));

	app.service('sMenuSettings', sMenuSettings)
	function sMenuSettings() {
		var stitle = 'sMenuSettings';
		console.log('START', stitle);

		var settingsItems = [{
			"name":"Theme",
			"order":1,
			"enable":false,
			"icon":"flaticon-visibility1",
			"path":"theme",
			"action":"theme"
		},{
			"name":"Fonts",
			"order":3,
			"enable":false,
			"icon":"flaticon-underline7",
			"path":"fonts",
			"action":"fonts"
		},{
			"name":"Colors",
			"order":2,
			"enable":false,
			"icon":"flaticon-painter14",
			"path":"colors",
			"action":"colors"
		},{
			"name":"Icons",
			"order":4,
			"enable":false,
			"icon":"flaticon-emoticon117",
			"path":"icons",
			"action":"icons"
		}];
		return settingsItems;
	}
	// console.log('test sMenuSettings:', angular.module('app').service('sMenuSettings'));

})();
