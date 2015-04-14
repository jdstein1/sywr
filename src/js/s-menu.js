/*s-common.js*/
(function() {
	'use strict';

	app.service('sMenuNav', sMenuNav)
	function sMenuNav() {
		var stitle = 'sMenuNav';
		console.log('START', stitle);

		var menuItems = [{
			"name":"Home/Players",
			"order":1,
			"enable":true,
			"icon":"flaticon-home149",
			"path":"",
			"action":"route",
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
				{"name":"Jeff","path":"jeff","action":"route"},
				{"name":"John","path":"john","action":"route"},
				{"name":"Kaleb","path":"kaleb","action":"route"},
				{"name":"Kras","path":"kras","action":"route"},
				{"name":"Tanner","path":"tanner","action":"route"},
				{"name":"Vikas","path":"vikas","action":"route"}
			]
		},{
			"name":"Characters",
			"order":52,
			"enable":false,
			"icon":"flaticon-framed1",
			"path":"players",
			"action":"route",
			"tags":["character","pc","avatar"]
		},{
			"name":"Games",
			"order":53,
			"enable":false,
			"icon":"flaticon-gamepad3",
			"path":"games",
			"action":"route",
			"tags":["games","videogames"],
			"submenu":[
				{"name":"Destiny","path":"destiny","action":"route"}
			]
		},{
			"name":"Items",
			"order":54,
			"enable":false,
			"icon":"flaticon-list88",
			"path":"items",
			"action":"route",
			"tags":["item","items","gear","weapons","armor","consumables"]
		},{
			"name":"About",
			"order":2,
			"enable":true,
			"icon":"flaticon-round52",
			"path":"about",
			"action":"route",
			"tags":["about","info"]
		},{
			"name":"Blog",
			"order":3,
			"enable":false,
			"icon":"flaticon-blogger12",
			"path":"blog",
			"action":"route",
			"tags":["blog","news"]
		},{
			"name":"Todos",
			"order":99,
			"enable":true,
			"icon":"flaticon-check51",
			"path":"todos",
			"action":"route",
			"tags":["todo","todos","tasks"]
		},{
			"name":"Feedback",
			"order":98,
			"enable":false,
			"icon":"flaticon-chat75",
			"path":"feedback",
			"action":"route",
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
				{"name":"Tower","path":"tower","action":"route"},
				{"name":"Earth","path":"earth","action":"route"},
				{"name":"Moon","path":"moon","action":"route"},
				{"name":"Venus","path":"venus","action":"route"},
				{"name":"Mars","path":"mars","action":"route"},
				{"name":"Reef","path":"reef","action":"route"}
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
				{"name":"Patrol","path":"patrol","action":"route"},
				{"name":"Story","path":"story","action":"route"},
				{"name":"Strike","path":"strike","action":"route"},
				{"name":"Raid","path":"raid","action":"route"},
				{"name":"Crucible","path":"crucible","action":"route"},
				{"name":"Bounty","path":"bounty","action":"route"}
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
				{"name":"Future War Cult","path":"future-war-cult","action":"route"},
				{"name":"Dead Orbit","path":"dead-orbit","action":"route"},
				{"name":"New Monarchy","path":"new-monarchy","action":"route"},
				{"name":"Vanguard","path":"vanguard","action":"route"}
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
				{"name":"Arc","path":"arc","action":"route"},
				{"name":"Solar","path":"solar","action":"route"},
				{"name":"Void","path":"void","action":"route"}
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
				{"name":"Human","path":"human","action":"route"},
				{"name":"Awoken","path":"awoken","action":"route"},
				{"name":"Exo","path":"exo","action":"route"},
				{"name":"Fallen","path":"fallen","action":"route"},
				{"name":"Hive","path":"hive","action":"route"},
				{"name":"Vex","path":"vex","action":"route"},
				{"name":"Cabal","path":"cabal","action":"route"},
				{"name":"Ahamkara","path":"ahamkara","action":"route"}
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
			"enable":true,
			"icon":"flaticon-visibility1",
			"path":"theme",
			"action":"theme"
		},{
			"name":"Fonts",
			"order":3,
			"enable":true,
			"icon":"flaticon-underline7",
			"path":"fonts",
			"action":"fonts"
		},{
			"name":"Colors",
			"order":2,
			"enable":true,
			"icon":"flaticon-painter14",
			"path":"colors",
			"action":"colors"
		},{
			"name":"Special",
			"order":5,
			"enable":false,
			"icon":"flaticon-emoticon117",
			"path":"special",
			"action":"special"
		},{
			"name":"Icons",
			"order":4,
			"enable":true,
			"icon":"flaticon-emoticon117",
			"path":"icons",
			"action":"icons"
		}];
		return settingsItems;
	}
	// console.log('test sMenuSettings:', angular.module('app').service('sMenuSettings'));

})();
