/*common.js*/
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

	app.directive('dSorting', dSorting)
	function dSorting() {
		// var sortingOptions = [
		// 	"Name":"name",
		// 	"Handle":"handle",
		// 	"Account ID":"id"
		// ];
		return {
			restrict:'AE',
			scope:{
				sortingOptions:'=options'
			},
			// template: '<table class="sorting" ng-model="sortClass"></table>'
			templateUrl: 'includes/d-sorting.html'
		};
	}
	// console.log('test dSorting:', angular.module('app').directive('dSorting'));

	app.controller('cMain', cMain)
	function cMain($scope, sDataDestiny) {
		$scope.ctitle = 'cMain';
		$scope.title = 'Home';
		console.log('START', $scope.ctitle);
		$scope.DataDestiny = sDataDestiny;
		console.log('$scope.DataDestiny', $scope.DataDestiny);
	}
	// console.log('test cMain:', angular.module('app').controller('cMain'));

})();
