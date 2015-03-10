// c-todos.js
(function() {
	'use strict';

	app.controller('cTodo', cTodo)
	function cTodo($scope, $http, $route, $location) {
		$scope.ctitle = 'cTodo';
		console.log('START', $scope.ctitle);
		$scope.title = 'Todos';
		$scope.description = 'Todos';

		// $scope.sTodos = sTodos;
		// console.log('$scope.sTodos: ',$scope.sTodos);

		var myTodos = {};
		$http.get('data/todo.json')
			.success(function (data) {
				console.log('sTodo.getTodos -- success:', data);
				myTodos = data.todos;
				// return myTodos;
				$scope.todos = myTodos;
				// console.log('$scope.todos', $scope.todos);
				// console.log('$scope.todos.description: ',$scope.todos.description);
				// console.log('$scope.todos.meta: ',$scope.todos.meta);
				// console.log('$scope.todos.meta[1]: ',$scope.todos.meta[1]);
				// console.log('$scope.todos.meta[1].priority: ',$scope.todos.meta[1].priority);
			}).error(function () {
				console.log('sTodo.getTodos -- error');
				// get backup data at /data/clan.json
				myTodos = 'no data';
				// return myTodos;
			});

		$scope.convertMeta = function (type,index) {
			switch (type) {
				case "assignee":
					return $scope.todos.meta[0].assignee[index];
					break;
				case "priority":
					return $scope.todos.meta[1].priority[index];
					break;
				case "status":
					return $scope.todos.meta[2].status[index];
					break;
				default:
					break;
			}
		};
		$scope.convertIcon = function (type,index) {
			switch (type) {
				case "assignee":
					return $scope.todos.icons[0].assignee[index];
					break;
				case "priority":
					return $scope.todos.icons[1].priority[index];
					break;
				case "status":
					return $scope.todos.icons[2].status[index];
					break;
				default:
					break;
			}
		};
		$scope.testOptions = false;
		$scope.modelAssignee = 'null';
		$scope.modelPriority = 'null';
		$scope.modelStatus = 'null';
		$scope.fChangeStatus = function (status,id) {
			console.log('fChangeStatus', status+':'+$scope.todos.meta[2].status[status]);
			console.log('fChangeStatus', id+':'+$scope.todos.items[id].title);
		};

	}
	// console.log('test cTodo:', angular.module('app').controller('cTodo'));

})();
