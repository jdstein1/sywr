/*games.js*/
// (function() {
// 	'use strict';

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
			"type":["car","race","mmo"]
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

	app.controller('cGames', cGames)
	function cGames($scope, constProtocol, constBungieUrl, sDataGames, sDataGameDestiny) {
		$scope.ctitle = 'cGames';
		$scope.title = 'Games';
		console.log('START', $scope.ctitle);

		$scope.sortClass = {};
		$scope.sortClass.name = "def";
		$scope.sortClass.handle = "def";
		$scope.sortClass.id = "def";

		$scope.sortOrder = '-name';
		$scope.reverse = false;

		if ($scope.sortOrder) {
			console.log('$scope.sortOrder');
		} else {
			console.log('$scope.sortOrder');
		}

		$scope.sortOrderToggle = function (type) {
			console.log('sortOrderToggle:', type +'; type:'+ $scope.sortClass[type]);

			// for (var i = 0; i < $scope.sortClass.length; i++) {
			// 	console.log('$scope.sortClass[i]: ', $scope.sortClass[i]);
			// 	$scope.sortClass[i] = 'def';
			// };

			if ($scope.sortClass[type] === 'des') {
				$scope.sortClass[type] = 'asc';
			} else {
				$scope.sortClass[type] = 'des';
			}
			$scope.reverse=!$scope.reverse;
			console.log('$scope.sortClass: ', $scope.sortClass);
		};

		$scope.DataGames = sDataGames;
		console.log('$scope.DataGames', $scope.DataGames);

		$scope.DataGameDestiny = sDataGameDestiny;
		console.log('$scope.DataGameDestiny', $scope.DataGameDestiny);
	}
	// console.log('test cGames:', angular.module('app').controller('cGames'));

// })();
