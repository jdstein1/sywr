/*s-games.js*/
(function() {
	'use strict';

	app.service('sDataGames', sDataGames)
	function sDataGames() {
		var stitle = 'sDataGames';
		console.log('START', stitle);

		var myGameData = [{
			"nameDisplay":"Destiny",
			"nameSeo":"destiny",
			"type":["rpg","mmo","fps"],
			"publisher":"Activision",
			"developer":"Bungie"
		},{
			"nameDisplay":"The Crew",
			"nameSeo":"the-crew",
			"type":["car","race","mmo"],
			"publisher":"Activision",
			"developer":"Bungie"
		}];
		console.log('myGameData: ', myGameData);

		return myGameData;
	}
	// console.log('test sDataGames:', angular.module('app').service('sDataGames'));

	app.service('sDataGameDestiny', sDataGameDestiny)
	function sDataGameDestiny() {
		var stitle = 'sDataGameDestiny';
		console.log('START', stitle);

		var DataGameDestiny = ['test1', 'test2', 'test3']

		return DataGameDestiny;
	}
	// console.log('test sDataGameDestiny:', angular.module('app').service('sDataGameDestiny'));

})();
