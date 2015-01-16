/*d-sorting.js*/
(function() {
	'use strict';

	app.directive('dSorting', dSorting)
	function dSorting() {
		// var sortingOptions = [
		// 	"Name":"name",
		// 	"Handle":"handle",
		// 	"Account ID":"id"
		// ];

		$scope.sortClass = {};
		$scope.sortClass.name = "def";
		$scope.sortClass.handle = "def";
		$scope.sortClass.id = "def";
		console.log('$scope.sortClass: ', $scope.sortClass);

  		console.log('$route.current.params',$route.current.params );
		$scope.item = $route.current.params.item;

		$scope.sortOrder = '-name';
		$scope.reverse = false;

		if ($scope.sortOrder) {
			console.log('$scope.sortOrder');
		} else {
			console.log('$scope.sortOrder');
		}

		$scope.sortOrderToggle = function (type) {
			console.log('sortOrderToggle:', type +'; type:'+ $scope.sortClass[type]);

			// for (var i = 0; i < $scope.sortClass.length; i++) {
			// console.log('$scope.sortClass[i]: ', $scope.sortClass[i]);
			// $scope.sortClass[i] = 'def';
			// };

			if (type === 'all') {
				$scope.sortClass = {name: "def", handle: "def", id: "def"};
			} else {
				if ($scope.sortClass[type] === 'des') {
					$scope.sortClass[type] = 'asc';
				} else {
					$scope.sortClass[type] = 'des';
				}
			}
			$scope.reverse=!$scope.reverse;
			console.log('$scope.sortClass: ', $scope.sortClass);
		};

		return {
			restrict:'AE',
			scope:{
				options:'='
			},
			// template: '<table class="sorting" ng-model="sortClass"></table>'
			templateUrl: 'includes/d-sorting.html'
		};
	}
	// console.log('test dSorting:', angular.module('app').directive('dSorting'));

})();
