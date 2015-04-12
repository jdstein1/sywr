// d-player-metadata.js
(function() {
	'use strict';

	app.directive('dPlayerMetadata', dPlayerMetadata)
	function dPlayerMetadata() {

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
			templateUrl: 'tmpl/t-player-metadata.html'
		};

	}
	// console.log('test dPlayerMetadata:', angular.module('app').directive('dPlayerMetadata'));

})();
