// d-clan.js
(function() {
	'use strict';

	app.directive('dClan', dClan)

	function dClan() {

		return {
			restrict:'AE',
			replace:true,
			transclude:true,
			scope:'=',
			link: function (scope, element, attrs) {
                console.log('START dClan -- element: ', element);
            },
			controller: function ($scope, $element, $attrs) {
				console.log('START dClan -- $element: ', $element);
			},
			// template: '<md-card ng-repeat="item in dataClan"><md-card-content>user: {{item.user}}</md-card-content></md-card>'
			// templateUrl: 'tmpl/t-players.html'
			// templateUrl: 'tmpl/t-players-basic.html'
			// templateUrl: 'tmpl/t-players-simple.html'
			templateUrl: 'tmpl/t-clan.html'
			// templateUrl: 'tmpl/t-players-all.html'
		};

	}
	// console.log('test dClan:', angular.module('app').directive('dClan'));

})();
