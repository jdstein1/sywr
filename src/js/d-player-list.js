// d-players.js
(function() {
	'use strict';

	app.directive('dPlayerList', dPlayerList)

	function dPlayerList() {

		return {
			restrict:'AE',
			replace:true,
			transclude:true,
			scope:'=', // sortOrderChoice & sortReverse are connected, NO items
			link: function (scope, element, attrs) {
                console.log('START dPlayerList -- element: ', element);
            },
			controller: function ($scope, $element, $attrs) {
				console.log('START dPlayerList -- $element: ', $element);
			},
			// template: '<md-card ng-repeat="item in dataClan"><md-card-content>user: {{item.user}}</md-card-content></md-card>'
			// templateUrl: './views/tmpl/t-players.html'
			// templateUrl: './views/tmpl/t-players-basic.html'
			// templateUrl: './views/tmpl/t-players-simple.html'
			templateUrl: './views/tmpl/t-players-pretty.html'
			// templateUrl: './views/tmpl/t-players-all.html'
		};

	}
	// console.log('test dPlayerList:', angular.module('app').directive('dPlayerList'));

})();
