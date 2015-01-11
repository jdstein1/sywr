/*games.js*/
// (function() {
// 	'use strict';

	app.service('sDataGames', sDataGames)
	function sDataGames() {
		var stitle = 'sDataGames';
		console.log('START', stitle);

		var DataDestiny = ['test1', 'test2', 'test3']

		return DataDestiny;
	}
	// console.log('test sDataGames:', angular.module('app').service('sDataGames'));

	app.service('sDataDestiny', sDataDestiny)
	function sDataDestiny() {
		var stitle = 'sDataDestiny';
		console.log('START', stitle);

		var DataDestiny = ['test1', 'test2', 'test3']

		return DataDestiny;
	}
	// console.log('test sDataDestiny:', angular.module('app').service('sDataDestiny'));

	app.controller('cGames', cGames)
	function cGames($scope, sDataDestiny) {
		$scope.ctitle = 'cGames';
		$scope.title = 'Games';
		console.log('START', $scope.ctitle);

		$scope.DataDestiny = sDataDestiny;
		console.log('$scope.DataDestiny', $scope.DataDestiny);
	}
	// console.log('test cGames:', angular.module('app').controller('cGames'));

// })();
