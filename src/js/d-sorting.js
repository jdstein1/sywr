/*d-sorting.js*/
(function() {
	'use strict';

	app.directive('dSorting', dSorting)
	function dSorting() {

		// var sortClass = {};
		// sortClass.name = "def";
		// sortClass.handle = "def";
		// sortClass.id = "def";
		// console.log('sortClass: ', sortClass);

  // 		console.log('$route.current.params',$route.current.params );
		// var item = $route.current.params.item;

		// var sortOrder = '-name';
		// var reverse = false;

		// if (sortOrder) {
		// 	console.log('sortOrder');
		// } else {
		// 	console.log('sortOrder');
		// }

		// function sortOrderToggle (type) {
		// 	console.log('sortOrderToggle:', type +'; type:'+ sortClass[type]);

		// 	// for (var i = 0; i < sortClass.length; i++) {
		// 	// console.log('sortClass[i]: ', sortClass[i]);
		// 	// sortClass[i] = 'def';
		// 	// };

		// 	if (type === 'all') {
		// 		sortClass = {name: "def", handle: "def", id: "def"};
		// 	} else {
		// 		if (sortClass[type] === 'des') {
		// 			sortClass[type] = 'asc';
		// 		} else {
		// 			sortClass[type] = 'des';
		// 		}
		// 	}
		// 	reverse=!reverse;
		// 	console.log('sortClass: ', sortClass);
		// };

		return {
			restrict:'AE',
			// scope:false,
			// scope:{options:'='},
			scope:{options:'@'},
			controller: function ($scope, $rootScope, sSorting, sSortingMisc, sSortingTodo, sSortingPlayers) {
				console.log('dSorting $scope.options: ', $scope.options);

				// set sorting options based on "options" param...
				switch ($scope.options) {
					case "todo":
						$scope.sortOptions = sSortingTodo;
						break;
					case "players":
						$scope.sortOptions = sSortingPlayers;
						break;
					default:
						$scope.sortOptions = sSortingMisc;
						break;
				}
				$rootScope.sortOrderChoice = $scope.sortOptions[0].type;
				// $rootScope.filterChoice = '';
				console.log('dSorting $rootScope.sortOrderChoice: ', $rootScope.sortOrderChoice);

				$rootScope.sortCleared = true;
				$scope.sortClear = function () {
					console.log('sortClear: ', $rootScope.sortCleared);
					for (var i = 0; i < $scope.sortOptions.length; i++) {
						// console.log('$scope.sortOptions[i]: ', $scope.sortOptions[i]);
						$scope.sortOptions[i].asc = false;
						$scope.sortOptions[i].des = false;
						$scope.sortOptions[i].def = true;
					};
					$rootScope.sortOrderChoice = $scope.sortOptions[0];
					$rootScope.sortReverse = false;
					$rootScope.sortCleared = true;
				};

				$scope.sortOrderToggle2 = function (type, i) {
					console.log('sortOrderToggle2:', type);
					if ($scope.sortOptions[i].asc === $scope.sortOptions[i].des) {
						console.log('sortOrderToggle2:', type +'; both off or both on.  sort in ascending.');
						$rootScope.sortOrderChoice = type;
						$scope.sortOptions[i].asc = !$scope.sortOptions[i].asc;
						$scope.sortOptions[i].def = false;
					} else {
						console.log('sortOrderToggle2:', type +'; flip asc & des.');
						// console.log('$scope.sortOptions[i].asc: ', $scope.sortOptions[i].asc);
						// console.log('$scope.sortOptions[i].des: ', $scope.sortOptions[i].des);
						$rootScope.sortOrderChoice = type;
						$scope.sortOptions[i].asc = !$scope.sortOptions[i].asc;
						$scope.sortOptions[i].des = !$scope.sortOptions[i].des;
						$scope.sortOptions[i].def = false;
						// $scope.sortOptions[i].asc ? fDescending(type) : fAscending(type);
						// if ($scope.sortOptions[i].class === 'des') {
						// 	$scope.sortOptions[i].class = 'asc';
						// } else if ($scope.sortOptions[i].class === 'asc') {
						// 	$scope.sortOptions[i].class = 'des';
						// } else {
						// 	$scope.sortOptions[i].class = "def";						
						// }
					};
					$rootScope.sortReverse=!$rootScope.sortReverse;
					// return $rootScope.sortReverse;
					// return $scope.sortOrderChoice;
				};

			},
			templateUrl: 'tmpl/t-sorting.html'
		};
	}
	// console.log('test dSorting:', angular.module('app').directive('dSorting'));

})();
