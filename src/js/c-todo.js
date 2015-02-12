// c-sorting.js
(function() {
	'use strict';

	app.controller('cTodo', cTodo)
	function cTodo($scope, $http, $route, $location) {
		$scope.ctitle = 'cTodo';
		$scope.title = 'Todos';
		console.log('START', $scope.ctitle);

		var myTodos = {};
			$http.get('data/todo.json')
				.success(function (data) {
					console.log('sTodo.getTodos -- success:', data);
					myTodos = data.todos;
					// return myTodos;
					$scope.todos = myTodos;
					console.log('$scope.todos', $scope.todos);
				}).error(function () {
					console.log('sTodo.getTodos -- error');
					// get backup data at /data/clan.json
					myTodos = 'no data';
					// return myTodos;
				});

		$scope.arrayPriority = ["SUPER HIGH","HIGH","MEDIUM","LOW"];
		$scope.arrayStatus = ["NOT STARTED","IN PROGRESS","HOLD","DONE"];

		$scope.convertIndex = function (type,index) {
			switch (type) {
				case "status":
					return $scope.arrayStatus[index];
					break;
				case "priority":
					return $scope.arrayPriority[index];
					break;
				default:
					break;
			}
		};

		// $scope.todos = sTodo;
		// $scope.todos = sTodo.getTodos();

	}
	// console.log('test cTodo:', angular.module('app').controller('cTodo'));

})();
