/*d-sorting.js*/
(function() {
	'use strict';

	app.directive('dSorting', dSorting)
	function dSorting($route) {
		// var sortingOptions = [
		// 	"Name":"name",
		// 	"Handle":"handle",
		// 	"Account ID":"id"
		// ];

		var sortClass = {};
		sortClass.name = "def";
		sortClass.handle = "def";
		sortClass.id = "def";
		console.log('sortClass: ', sortClass);

  		console.log('$route.current.params',$route.current.params );
		var item = $route.current.params.item;

		var sortOrder = '-name';
		var reverse = false;

		if (sortOrder) {
			console.log('sortOrder');
		} else {
			console.log('sortOrder');
		}

		function sortOrderToggle (type) {
			console.log('sortOrderToggle:', type +'; type:'+ sortClass[type]);

			// for (var i = 0; i < sortClass.length; i++) {
			// console.log('sortClass[i]: ', sortClass[i]);
			// sortClass[i] = 'def';
			// };

			if (type === 'all') {
				sortClass = {name: "def", handle: "def", id: "def"};
			} else {
				if (sortClass[type] === 'des') {
					sortClass[type] = 'asc';
				} else {
					sortClass[type] = 'des';
				}
			}
			reverse=!reverse;
			console.log('sortClass: ', sortClass);
		};

		return {
			restrict:'AE',
			scope:{
				options:'=',
				sortingOptions:'=',
				sortClass:'@'
			},
			controller: function ($scope) {
				console.log('$scope: ', $scope);
			},
			// template: '<table class="sorting" ng-model="sortClass"></table>'
			templateUrl: 'tmpl/t-sorting.html'
		};
	}
	// console.log('test dSorting:', angular.module('app').directive('dSorting'));

})();
