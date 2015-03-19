// c-sorting.js
(function() {
	'use strict';

	app.controller('cSorting', cSorting)
	function cSorting($scope, $rootScope, $http, $route, $location, sSortingMisc, sSortingTodo, sSortingPlayers, sSorting) {
		$scope.ctitle = 'cSorting';
		console.log('START', $scope.ctitle);

		// console.log('$location.$$path: ',$location.$$path);
		// set sort options based on location path...
		if ($location.$$path === '/players') {
			$scope.sortOptions = sSortingPlayers;
		} else if ($location.$$path === '/todos') {
			$scope.sortOptions = sSortingTodo;
		} else {
			$scope.sortOptions = sSortingMisc;
		};

		console.log('$scope.sortOptions:', $scope.sortOptions);
		console.log('Object.keys($scope.sortOptions):', Object.keys($scope.sortOptions));
		console.log('Object.keys($scope.sortOptions).length:', Object.keys($scope.sortOptions).length);

		// sortOptionsGroup: single object for all types of options
		// $scope.sortOptionsGroup = sSorting;
		// console.log('Object.keys($scope.sortOptionsGroup):', Object.keys($scope.sortOptionsGroup));
		// console.log('Object.keys($scope.sortOptionsGroup).length:', Object.keys($scope.sortOptionsGroup).length);

		// console.log('$scope.sortOptionsGroup.todo:', $scope.sortOptionsGroup.todo);
		// $rootScope.sortOrderChoiceTodo = $scope.sortOptionsGroup.todo[0].type;
		// console.log('$rootScope.sortOrderChoiceTodo:', $rootScope.sortOrderChoiceTodo);

		// console.log('$scope.sortOptionsGroup.players:', $scope.sortOptionsGroup.players);
		// $rootScope.sortOrderChoicePlayers = $scope.sortOptionsGroup.players[0].type;
		// console.log('$rootScope.sortOrderChoicePlayers:', $rootScope.sortOrderChoicePlayers);

		$scope.rankDefinitions = {2:"Member",3:"Admin",1:"Probie",4:"Founder",0:"Pledge"}

		$scope.sortClass = {};
		$scope.sortClassAsc = "flaticon-drop25";
		$scope.sortClassDes = "flaticon-drop27";
		$scope.sortClassDef = "flaticon-show7";
		$scope.sortClass.name = "def";
		$scope.sortClass.handle = "def";
		$scope.sortClass.id = "def";
		console.log('$scope.sortClass: ', $scope.sortClass);

		$scope.sortOrder = '-name';
		$rootScope.sortReverse = false;

		// if ($scope.sortOrder) {
		// 	console.log('$scope.sortOrder');
		// } else {
		// 	console.log('$scope.sortOrder');
		// }

		$scope.sortOrderToggle = function (type) {
			console.log('sortOrderToggle:', type +'; type:'+ $scope.sortClass[i]);
			if (type === 'all') {
				$scope.sortClass = {name: "def", handle: "def", id: "def"};
			} else {
				if ($scope.sortClass[i] === 'des') {
					$scope.sortClass[i] = 'asc';
				} else {
					$scope.sortClass[i] = 'des';
				}
			}
			$rootScope.sortReverse=!$rootScope.sortReverse;
			// console.log('$scope.sortClass: ', $scope.sortClass);
		};

		var fDescending = function (type) {
			console.log('fDescending: ', type+' and '+$scope.sortOptions[i].asc);
			$scope.sortOptions[i].class = 'des';
			$scope.sortOptions[i].asc = !$scope.sortOptions[i].asc;
		};
		var fAscending = function (type) {
			console.log('fAscending: ', type);
			$scope.sortOptions[i].class = 'asc';
			$scope.sortOptions[i].asc = !$scope.sortOptions[i].asc;
		};

		$rootScope.sortCleared = true;
		$scope.sortClear = function () {
			console.log('cSorting sortClear: ', $rootScope.sortCleared);
			for (var i = 0; i < $scope.sortOptions.length; i++) {
				// console.log('$scope.sortOptions[i]: ', $scope.sortOptions[i]);
				$scope.sortOptions[i].asc = false;
				$scope.sortOptions[i].des = false;					
				$scope.sortOptions[i].def = true;					
			};
			$rootScope.sortOrderChoice = '';
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
			// console.log('$scope.sortOptions[i].class: ', $scope.sortOptions[i].class);
		};

	}
	// console.log('test cSorting:', angular.module('app').controller('cSorting'));

})();
