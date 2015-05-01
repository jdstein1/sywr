// d-sorting.js
(function() {
	'use strict';

	app.directive('dSorting', dSorting)
	function dSorting() {

		return {
			restrict:'AE',
			// scope:false,
			// scope:{options:'='},
			scope:{options:'@'},
			controller: function ($scope, $rootScope, sSorting, sSortingMisc, sSortingTodo, sSortingPlayers, sSortingClan) {
				console.log('dSorting $scope.options: ', $scope.options);

				// set sorting options based on "options" param...
				switch ($scope.options) {
					case "todo":
						$scope.sortOptions = sSortingTodo;
						break;
					case "players":
						$scope.sortOptions = sSortingPlayers;
						break;
					case "clan":
						$scope.sortOptions = sSortingClan;
						break;
					default:
						$scope.sortOptions = sSortingMisc;
						break;
				}
				$rootScope.sortOrderChoice = $scope.sortOptions[0].type;
				console.log('dSorting $rootScope.sortOrderChoice: ', $rootScope.sortOrderChoice);

				$rootScope.sortCleared = true;
				$scope.sortClear = function () {
					console.log('dSorting sortClear: ', $rootScope.sortCleared);
					for (var i = 0; i < $scope.sortOptions.length; i++) {
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
						$rootScope.sortOrderChoice = type;
						$scope.sortOptions[i].asc = !$scope.sortOptions[i].asc;
						$scope.sortOptions[i].des = !$scope.sortOptions[i].des;
						$scope.sortOptions[i].def = false;
					};
					$rootScope.sortReverse=!$rootScope.sortReverse;
				};

			},
			templateUrl: 'tmpl/t-sorting.html'
		};
	}
	// console.log('test dSorting:', angular.module('app').directive('dSorting'));

})();
