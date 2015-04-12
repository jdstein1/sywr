// d-player-inventory.js
(function() {
	'use strict';

	app.directive('dPlayerInventory', dPlayerInventory)
	function dPlayerInventory() {

		return {
			restrict:'AE',
			replace:true,
			transclude:true,
			scope:'=',
			link: function (scope, elem, attrs) {
				console.log('scope: ', scope);
				console.log('elem: ', elem);
				console.log('attrs: ', attrs);
			},
			// compile: function (scope, elem, attrs) {
			// 	console.log('scope: ', scope);
			// 	console.log('elem: ', elem);
			// 	console.log('attrs: ', attrs);
			// },
			controller: function ($scope) {
				console.log('$scope: ', $scope);
			},
			templateUrl: 'tmpl/t-player-inventory.html'
		};

	}
	// console.log('test dPlayerInventory:', angular.module('app').directive('dPlayerInventory'));

})();
