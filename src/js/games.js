/*games.js*/
// (function() {
// 	'use strict';

	app.service('sDataGames', sDataGames)
	function sDataGames() {
		var stitle = 'sDataGames';
		console.log('START', stitle);

		var myGameData = [{
			"type":["rpg","mmo","fps"],
			"name":"Destiny",
			"publisher":"Activision",
			"developer":"Bungie"
		}];
		console.log('myGameData: ', myGameData);

		return DataGames;
	}
	// console.log('test sDataGames:', angular.module('app').service('sDataGames'));

	app.service('sDataGameDestiny', sDataGameDestiny)
	function sDataGameDestiny() {
		var stitle = 'sDataGameDestiny';
		console.log('START', stitle);

		var DataDestiny = ['test1', 'test2', 'test3']

		return DataDestiny;
	}
	// console.log('test sDataGameDestiny:', angular.module('app').service('sDataGameDestiny'));

	app.controller('cGames', cGames)
	function cGames($scope, sDataGameDestiny) {
		$scope.ctitle = 'cGames';
		$scope.title = 'Games';
		console.log('START', $scope.ctitle);

		$scope.sortClass = "def";

		$scope.DataDestiny = sDataGameDestiny;
		console.log('$scope.DataDestiny', $scope.DataDestiny);
	}
	// console.log('test cGames:', angular.module('app').controller('cGames'));

// })();
