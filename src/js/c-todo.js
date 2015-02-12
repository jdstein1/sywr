// c-sorting.js
(function() {
	'use strict';

	app.controller('cTodo', cTodo)
	function cTodo($scope, $http, $route, $location, sTodo) {
		$scope.ctitle = 'cTodo';
		$scope.title = 'Sorting';
		console.log('START', $scope.ctitle);

		$scope.todos = sTodo;
		console.log('$scope.todos', $scope.todos);

	}
	// console.log('test cTodo:', angular.module('app').controller('cTodo'));

})();
