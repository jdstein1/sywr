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
			"enable":false,
			"icon":"flaticon-users25",
			"path":"players",
			"action":"submenu",
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
			"enable":false,
			"icon":"flaticon-framed1",
			"path":"players",
			"action":"menu",
			"tags":["character","pc","avatar"]
		},{
			"name":"Games",
			"order":53,
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
			"order":60,
			"enable":false,
			"icon":"flaticon-swap3",
			"path":"compare",
			"action":"menu",
			"tags":["compare","comparison"]
		},{
			"name":"Items",
			"order":54,
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
			"name":"Todos",
			"order":99,
			"enable":true,
			"icon":"flaticon-check51",
			"path":"todos",
			"action":"menu",
			"tags":["todo","todos","tasks"]
		},{
			"name":"Feedback",
			"order":98,
			"enable":true,
			"icon":"flaticon-chat75",
			"path":"feedback",
			"action":"menu",
			"tags":["form","feedback","gripes","complaints","suggestions"]
		},{
			"name":"Test",
			"order":1000,
			"enable":true,
			"icon":"flaticon-bug18",
			"path":"test",
			"action":"menu"
		}];
		return menuItems;
	}
	// console.log('test sMenuNav:', angular.module('app').service('sMenuNav'));

	app.service('sMenuDestiny', sMenuDestiny)
	function sMenuDestiny() {
		var stitle = 'sMenuDestiny';
		console.log('START', stitle);

		var destinyItems = [{
			"name":"Environments",
			"order":1,
			"enable":false,
			"icon":"flaticon-map102",
			"path":"items",
			"action":"submenu",
			"tags":["maps","locations","environments"],
			"submenu":[
				{"name":"Tower"},
				{"name":"Earth"},
				{"name":"Moon"},
				{"name":"Venus"},
				{"name":"Mars"},
				{"name":"Reef"}
			]
		},{
			"name":"Merchants",
			"order":2,
			"enable":false,
			"icon":"flaticon-painter14",
			"path":"colors",
			"action":"url",
			"tags":["merchants","sellers","stores","buyers","traders"],
			"url":"http://destiny.wikia.com/wiki/Tower",
			"submenu":[{
					"class":"Unknown",
					"role":"Agent of the Nine",
					"name":"Xur",
					"action":"url",
					"url":"http://destiny.wikia.com/wiki/X%C3%BBr"
				},{
					"class":"Hunter",
					"role":"vanguard",
					"name":"Cayde-6",
					"action":"menu"
				},{
					"class":"Titan",
					"role":"vanguard",
					"name":"Commander Zavala",
					"action":"menu"
				},{
					"class":"Warlock",
					"role":"vanguard",
					"name":"Ikora Rey",
					"action":"menu"
				},{
					"class":"Crucible",
					"role":"Quartermaster",
					"name":"Arcite 99-40",
					"action":"menu"
				},{
					"class":"Crucible",
					"role":"Handler",
					"name":"Lord Shaxx",
					"action":"menu"
				}]
		},{
			"name":"Activities",
			"order":3,
			"enable":false,
			"icon":"flaticon-underline7",
			"path":"fonts",
			"action":"submenu",
			"tags":["activities","pve","pvp","missions"],
			"submenu":[
				{"name":"Patrol"},
				{"name":"Story"},
				{"name":"Strike"},
				{"name":"Raid"},
				{"name":"Crucible"},
				{"name":"Bounty"}
			]
		},{
			"name":"Factions",
			"order":4,
			"enable":false,
			"icon":"flaticon-emoticon117",
			"path":"icons",
			"action":"submenu",
			"tags":["factions","groups","clubs","fraternities","cults"],
			"submenu":[
				{"name":"Future War Cult"},
				{"name":"Dead Orbit"},
				{"name":"New Monarchy"},
				{"name":"Vanguard"}
			]
		},{
			"name":"Elementals",
			"order":4,
			"enable":false,
			"icon":"flaticon-emoticon117",
			"path":"icons",
			"action":"submenu",
			"tags":["elementals","burn","elements"],
			"submenu":[
				{"name":"Arc"},
				{"name":"Solar"},
				{"name":"Void"}
			]
		},{
			"name":"Species",
			"order":4,
			"enable":false,
			"icon":"flaticon-emoticon117",
			"path":"icons",
			"action":"submenu",
			"tags":["species","races","groups","creeds"],
			"submenu":[
				{"name":"Human"},
				{"name":"Awoken"},
				{"name":"Exo"},
				{"name":"Fallen"},
				{"name":"Hive"},
				{"name":"Vex"},
				{"name":"Cabal"},
				{"name":"Ahamkara"}
			]
		}];
		return destinyItems;
	}
	// console.log('test sMenuDestiny:', angular.module('app').service('sMenuDestiny'));

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
