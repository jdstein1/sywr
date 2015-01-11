/*blog.js*/
// (function() {
// 	'use strict';

	app.controller('cBlog', cBlog)
	function cBlog($scope, sDataDestiny) {
		$scope.ctitle = 'cBlog';
		$scope.title = 'Blog';
		console.log('START', $scope.ctitle);

		$scope.DataDestiny = sDataDestiny;
		console.log('$scope.DataDestiny', $scope.DataDestiny);
	}
	// console.log('test cBlog:', angular.module('app').controller('cBlog'));

// })();
