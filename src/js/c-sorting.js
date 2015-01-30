// c-sorting.js
(function() {
	'use strict';

	app.controller('cSorting', cSorting)
	function cSorting($scope, $http, $route, $location) {
		$scope.ctitle = 'cSorting';
		$scope.title = 'Sorting';
		console.log('START', $scope.ctitle);

		$scope.sortOptions = [
			{
				'type':'name',
				'tag':'name',
				'class':'',
				'def':true,
				'asc':false,
				'des':false
			},
			{
				'type':'handle',
				'tag':'handle',
				'class':'',
				'def':true,
				'asc':false,
				'des':false
			},
			{
				'type':'id',
				'tag':'account id',
				'class':'',
				'def':true,
				'asc':false,
				'des':false
			}
		];
		console.log('$scope.sortOptions:', $scope.sortOptions);
		console.log('$scope.sortOptions.length:', $scope.sortOptions.length);
		$scope.sortOrderChoice = "name";
		console.log('$scope.sortOrderChoice:', $scope.sortOrderChoice);

		$scope.sortClass = {};
		$scope.sortClassAsc = "flaticon-drop25";
		$scope.sortClassDes = "flaticon-drop27";
		$scope.sortClassDef = "flaticon-show7";
		$scope.sortClass.name = "def";
		$scope.sortClass.handle = "def";
		$scope.sortClass.id = "def";
		console.log('$scope.sortClass: ', $scope.sortClass);

		$scope.sortOrder = '-name';
		$scope.sortReverse = false;

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
			$scope.sortReverse=!$scope.sortReverse;
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

		$scope.sortClear = function () {
			console.log('sortClear');
			$scope.sortOrderChoice = "";
			$scope.sortReverse = false;
			for (var i = 0; i < $scope.sortOptions.length; i++) {
				console.log('$scope.sortOptions[i]: ', $scope.sortOptions[i]);
				$scope.sortOptions[i].asc = false;
				$scope.sortOptions[i].des = false;					
				$scope.sortOptions[i].def = true;					
			};
		};

		$scope.sortOrderToggle2 = function (type, i) {
			console.log('sortOrderToggle2:', type);
			if ($scope.sortOptions[i].asc === $scope.sortOptions[i].des) {
				console.log('sortOrderToggle2:', type +'; both off or on.  sort in ascending.');
				$scope.sortOrderChoice = type;
				$scope.sortOptions[i].asc = !$scope.sortOptions[i].asc;
				$scope.sortOptions[i].def = false;
			} else {
				console.log('sortOrderToggle2:', type +'; flip asc & des.');
				console.log('$scope.sortOptions[i].asc: ', $scope.sortOptions[i].asc);
				console.log('$scope.sortOptions[i].des: ', $scope.sortOptions[i].des);
				$scope.sortOrderChoice = type;
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
			}
			$scope.sortReverse=!$scope.sortReverse;
			// console.log('$scope.sortOptions[i].class: ', $scope.sortOptions[i].class);
		};

	}
	// console.log('test cSorting:', angular.module('app').controller('cSorting'));

})();
