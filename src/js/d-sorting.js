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
				console.group('dSorting -- $scope.options: ', $scope.options);

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
				console.log('dSorting -- $rootScope.sortOrderChoice: ', $rootScope.sortOrderChoice);

				var sortCleared = false;
				$scope.sortClear = function () {
					console.group('dSorting -- sortClear: ', $scope.sortOptions);
					for (var i = 0; i < $scope.sortOptions.length; i++) {
						// apply ASC class (up arrow)
						$scope.sortOptions[i].asc = false;
						// apply DES class (down arrow)
						$scope.sortOptions[i].des = false;
						// apply DEF class (both arrows)
						$scope.sortOptions[i].def = true;
					};
					$rootScope.sortOrderChoice = $scope.sortOptions[0];
					$rootScope.sortReverse = false;
					sortCleared = !sortCleared;
					console.groupEnd();
				};

				$scope.sortOrderToggle = function (type, i) {
					console.group('dSorting -- sortOrderToggle:', type);
					// ASC and DES are equal: not sorted yet...
					if ($scope.sortOptions[i].asc === $scope.sortOptions[i].des) {
						// put into ASC 
						console.log('dSorting -- sortOrderToggle:', type +'; both off or both on.  sort in ascending.');
						$rootScope.sortOrderChoice = type;
						$scope.sortOptions[i].asc = !$scope.sortOptions[i].asc;
						$scope.sortOptions[i].def = false;
					} else {
						console.log('dSorting -- sortOrderToggle:', type +'; flip asc & des.');
						$rootScope.sortOrderChoice = type;
						$scope.sortOptions[i].asc = !$scope.sortOptions[i].asc;
						$scope.sortOptions[i].des = !$scope.sortOptions[i].des;
						$scope.sortOptions[i].def = false;
					};
					$rootScope.sortReverse=!$rootScope.sortReverse;
					console.groupEnd();
				};
				console.groupEnd();
			},
			templateUrl: './views/tmpl/t-sorting.html'
		};
	}
	// console.log('test dSorting:', angular.module('app').directive('dSorting'));

})();
