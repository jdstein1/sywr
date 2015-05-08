// d-sorting.js
(function() {
	'use strict';

	app.directive('dSorting', dSorting)
	function dSorting() {

		return {
			restrict:'AE',
			// scope:'=',
			// scope:'@',
			// scope:{options:'='},
			scope:{options:'@'},
			controller: function ($scope, $rootScope, sSorting, sSortingMisc, sSortingTodo, sSortingPlayers, sSortingClan) {
				console.log('dSorting -- $scope.options: ', $scope.options);

				// $scope.sortOptions = $scope.options;

				// var flagCleared = false;

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
					return $scope.sortOptions;
				}
				console.log('dSorting -- $scope.sortOptions: ', $scope.sortOptions);

				$rootScope.sortOrderChoice = $scope.sortOptions[0].type;
				console.log('dSorting -- $rootScope.sortOrderChoice: ', $rootScope.sortOrderChoice);

				$scope.sortClear = function (x) {
					console.group('dSorting -- sortClear -- x: ',x);
					if (typeof(x) === 'number') {
						// Reset this one if 'x' exists...
						console.log('clear this one');
						// apply ASC class (up arrow)
						$scope.sortOptions[x].asc = false;
						// apply DES class (down arrow)
						$scope.sortOptions[x].des = false;
						// apply DEF class (both arrows)
						$scope.sortOptions[x].def = true;
					} else {
						// Go through all options and reset them...
						console.log('clear all',$scope.sortOptions);
						// Loop over all options.
						for (var i = 0; i < $scope.sortOptions.length; i++) {
							// apply ASC class (up arrow)
							$scope.sortOptions[i].asc = false;
							// apply DES class (down arrow)
							$scope.sortOptions[i].des = false;
							// apply DEF class (both arrows)
							$scope.sortOptions[i].def = true;
							var x = 0;
						};
						$rootScope.sortReverse = false;
					}
					// Set to desired sorting option.
					$rootScope.sortOrderChoice = $scope.sortOptions[x].type;
					// Set to default sorting option.
					// $rootScope.sortOrderChoice = $scope.sortOptions[0];
					// Reset reverse.
					// Reset clear flag.
					// flagCleared = true;
					console.groupEnd();
				};

				$scope.sortOrderToggle = function (type, myIndex) {
					console.group('dSorting -- sortOrderToggle: ', type, myIndex, $scope.sortOptions[myIndex].type);
					// set sort order choice to passed arg.
					$rootScope.sortOrderChoice = type;
					$scope.sortOptions[myIndex].def = false;

					for (var i = $scope.sortOptions.length - 1; i >= 0; i--) {
						$scope.sortOptions[i];
						if (i === myIndex) {
							console.log('clicked this one: ', $scope.sortOptions[myIndex].type, $scope.sortOptions[myIndex].asc, $scope.sortOptions[myIndex].des, $scope.sortOptions[myIndex].def);
							// don't reset this one...
							// ASC and DES are equal: not sorted yet...
							if ($scope.sortOptions[myIndex].asc === $scope.sortOptions[myIndex].des) {
								// not sorted yet...
								console.log('dSorting -- new sort');
								$scope.sortOptions[myIndex].asc = true;
								$scope.sortOptions[myIndex].des = false;
							} else {
								// already sorted...
								console.log('dSorting -- re-sort');
								$scope.sortOptions[myIndex].asc = !$scope.sortOptions[myIndex].asc;
								$scope.sortOptions[myIndex].des = !$scope.sortOptions[myIndex].des;
							};
						} else {
							// do reset these...
							// $scope.sortClear(i);
						}
					};
					$rootScope.sortReverse = !$rootScope.sortReverse;
					console.groupEnd();
				};

			},
			templateUrl: './views/tmpl/t-sorting.html'
		};
	}
	// console.log('test dSorting: ', angular.module('app').directive('dSorting'));

})();
