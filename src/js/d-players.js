// d-players.js
(function() {
	'use strict';

	app.directive('dPlayers', dPlayers)

	function dPlayers() {

		return {
			restrict:'AE',
			replace:true,
			transclude:true,
			scope:'=', // sortOrderChoice & sortReverse are connected, NO items
			link: function (scope, element, attrs) {
                console.log('START dPlayers -- element: ', element);
            },
			controller: function ($scope, $element, $attrs) {
				console.log('START dPlayers -- $element: ', $element);
			},
			// template: '<md-card ng-repeat="item in dataClan"><md-card-content>user: {{item.user}}</md-card-content></md-card>'
			// templateUrl: 'tmpl/t-players.html'
			// templateUrl: 'tmpl/t-players-basic.html'
			// templateUrl: 'tmpl/t-players-simple.html'
			templateUrl: 'tmpl/t-players-pretty.html'
			// templateUrl: 'tmpl/t-players-all.html'
		};

	}
	// console.log('test dPlayers:', angular.module('app').directive('dPlayers'));

})();
