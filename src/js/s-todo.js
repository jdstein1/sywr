/*s-todo.js*/
(function() {
	'use strict';

	app.service('sTodo', sTodo)
	function sTodo($http) {
		var stitle = 'sTodo';
		console.log('START', stitle);

		var myTodos = {};
		// this.getTodos = function() {
			$http.get('data/todo.json')
				.success(function (data) {
					console.log('sTodo.getTodos -- success:', data);
					myTodos = data;
					// return myTodos;
				}).error(function () {
					console.log('sTodo.getTodos -- error');
					// get backup data at /data/clan.json
					myTodos = 'no data';
					// return myTodos;
				});
			// return myTodos;
		// };
		// console.log('sTodo', sTodo);
		// return sTodo;
		// return myTodos;
		// console.log('myTodos', myTodos);

	}
	// console.log('test sTodo:', angular.module('app').service('sTodo'));

})();