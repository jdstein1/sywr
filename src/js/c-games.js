/*c-games.js*/
(function() {
	'use strict';

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

})();
