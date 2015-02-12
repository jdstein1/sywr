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
			scope:{
				options:'=',
				sortingOptions:'@'
				// sortClass:'@'
			},
			controller: function ($scope) {
				console.log('dSorting $scope: ', $scope);


				$scope.sortOptionsArr = {
					'todo':[{
						'type':'assignee',
						'tag':'assignee',
						'class':'',
						'def':true,
						'asc':false,
						'des':false
					},{
						'type':'status',
						'tag':'status',
						'class':'',
						'def':true,
						'asc':false,
						'des':false
					},{
						'type':'priority',
						'tag':'priority',
						'class':'',
						'def':true,
						'asc':false,
						'des':false
					}],
					'players':[{
						'type':'name',
						'tag':'name',
						'class':'',
						'def':true,
						'asc':false,
						'des':false
					},{
						'type':'rank',
						'tag':'status',
						'class':'',
						'def':true,
						'asc':false,
						'des':false
					},{
						'type':'handle',
						'tag':'handle',
						'class':'',
						'def':true,
						'asc':false,
						'des':false
					},{
						'type':'id',
						'tag':'account id',
						'class':'',
						'def':true,
						'asc':false,
						'des':false
					}],
					'other':[{
						'type':'assignee',
						'tag':'assignee',
						'class':'',
						'def':true,
						'asc':false,
						'des':false
					}]
				};

				console.log('dSorting $scope.sortOptionsArr.todo: ', $scope.sortOptionsArr.todo);

				$scope.sortOptions = $scope.sortOptionsArr.todo;

				$scope.sortOrderChoice = $scope.sortOptions[0].type;
				console.log('dSorting $scope.sortOrderChoice: ', $scope.sortOrderChoice);

				$scope.sortCleared = true;
				$scope.sortClear = function () {
					console.log('sortClear: ', $scope.sortCleared);
					for (var i = 0; i < $scope.sortOptions.length; i++) {
						// console.log('$scope.sortOptions[i]: ', $scope.sortOptions[i]);
						$scope.sortOptions[i].asc = false;
						$scope.sortOptions[i].des = false;
						$scope.sortOptions[i].def = true;
					};
					$scope.sortOrderChoice = $scope.sortOptions[0];
					$scope.sortReverse = false;
					$scope.sortCleared = true;
				};

				$scope.sortOrderToggle2 = function (type, i) {
					console.log('sortOrderToggle2:', type);
					if ($scope.sortOptions[i].asc === $scope.sortOptions[i].des) {
						console.log('sortOrderToggle2:', type +'; both off or both on.  sort in ascending.');
						$scope.sortOrderChoice = type;
						$scope.sortOptions[i].asc = !$scope.sortOptions[i].asc;
						$scope.sortOptions[i].def = false;
					} else {
						console.log('sortOrderToggle2:', type +'; flip asc & des.');
						// console.log('$scope.sortOptions[i].asc: ', $scope.sortOptions[i].asc);
						// console.log('$scope.sortOptions[i].des: ', $scope.sortOptions[i].des);
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
					};
					$scope.sortReverse=!$scope.sortReverse;
					// console.log('$scope.sortOptions[i].class: ', $scope.sortOptions[i].class);
				};

			},
			templateUrl: 'tmpl/t-sorting.html'
		};
	}
	// console.log('test dSorting:', angular.module('app').directive('dSorting'));

})();
