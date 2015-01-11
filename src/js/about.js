/*blog.js*/
// (function() {
// 	'use strict';

	app.controller('cAbout', cAbout)
	function cAbout($scope, sDataDestiny) {
		$scope.ctitle = 'cAbout';
		$scope.title = 'About';
		console.log('START', $scope.ctitle);

		$scope.DataDestiny = sDataDestiny;
		console.log('$scope.DataDestiny', $scope.DataDestiny);
	}
	// console.log('test cAbout:', angular.module('app').controller('cAbout'));

// })();
